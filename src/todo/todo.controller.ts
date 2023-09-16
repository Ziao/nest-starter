import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { Todo } from 'src/generated/dto/todo.entity';
import { PrismaService } from '../db/prisma.service';
import { CreateTodoDto } from './createTodo.dto';
import { UpdateTodoDto } from './updateTodo.dto';

@Controller('todo')
export class TodoController {
    constructor(private readonly prismaService: PrismaService) {}

    /**
     * List todos
     */
    @Get()
    async list(): Promise<Todo[]> {
        return await this.prismaService.todo.findMany({});
    }

    /**
     * Get a todo by id
     * @param id
     */
    @Get('/:id')
    async get(@Param('id') id: string) {
        return await this.prismaService.todo.findUnique({
            where: {
                id: parseInt(id),
            },
        });
    }

    /**
     * Create a todo
     * @param body
     */
    @Post()
    async create(@Body() body: CreateTodoDto) {
        console.log('body', body);
        return await this.prismaService.todo.create({
            data: {
                task: body.task,
            },
        });
    }

    /**
     * Update a todo
     */
    @Patch('/:id')
    async update(@Param('id') id: string, @Body() body: UpdateTodoDto) {
        console.log({ id, body });
        return await this.prismaService.todo.update({
            where: {
                id: parseInt(id),
            },
            data: {
                task: body.task,
                completedAt: body.complete ? new Date() : null,
            },
        });
    }
}

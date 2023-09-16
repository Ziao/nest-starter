import { ApiProperty } from '@nestjs/swagger';

export class CreateTodoDto {
    @ApiProperty()
    task: string;
    @ApiProperty({
        type: 'string',
        format: 'date-time',
        required: false,
        nullable: true,
    })
    completedAt?: Date;
}

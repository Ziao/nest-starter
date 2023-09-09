import { IsBoolean, IsString, MaxLength, MinLength } from 'class-validator';
import { CreateTodoDto } from './createTodo.dto';

export class UpdateTodoDto {
    /**
     * The task to be done
     */
    @IsString()
    @MinLength(3)
    @MaxLength(100)
    task?: string;

    /**
     * Whether the task is complete
     * Updates completeAt if true
     */
    @IsBoolean()
    complete?: boolean;
}

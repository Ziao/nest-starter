import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateTodoDto {
    /**
     * The task to be done
     */
    @IsString()
    @MinLength(3)
    @MaxLength(100)
    task: string;
}

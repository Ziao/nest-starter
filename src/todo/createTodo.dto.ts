import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateTodoDto {
    @IsString()
    @MinLength(3)
    @MaxLength(100)
    title: string;
}

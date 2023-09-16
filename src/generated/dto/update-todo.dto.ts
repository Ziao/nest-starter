import { ApiProperty } from '@nestjs/swagger';

export class UpdateTodoDto {
    @ApiProperty({
        required: false,
    })
    task?: string;
    @ApiProperty({
        type: 'string',
        format: 'date-time',
        required: false,
        nullable: true,
    })
    completedAt?: Date | null;
}

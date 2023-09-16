import { ApiProperty } from '@nestjs/swagger';

export class TodoDto {
    @ApiProperty({
        type: 'integer',
        format: 'int32',
    })
    id: number;
    @ApiProperty()
    task: string;
    @ApiProperty({
        type: 'string',
        format: 'date-time',
        nullable: true,
    })
    completedAt: Date | null;
    @ApiProperty({
        type: 'string',
        format: 'date-time',
    })
    createdAt: Date;
}

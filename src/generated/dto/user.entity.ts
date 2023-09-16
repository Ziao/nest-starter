import { ApiProperty } from '@nestjs/swagger';

export class User {
    @ApiProperty({
        type: 'integer',
        format: 'int32',
    })
    id: number;
    @ApiProperty()
    username: string;
    @ApiProperty()
    password: string;
    @ApiProperty({
        type: 'string',
        format: 'date-time',
    })
    createdAt: Date;
}

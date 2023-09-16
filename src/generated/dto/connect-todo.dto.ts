import { ApiProperty } from '@nestjs/swagger';

export class ConnectTodoDto {
    @ApiProperty({
        type: 'integer',
        format: 'int32',
    })
    id: number;
}

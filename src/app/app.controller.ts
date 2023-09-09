import { Controller, Get, Logger } from '@nestjs/common';

@Controller('/')
export class AppController {
    private readonly logger = new Logger(AppController.name);

    /**
     * Hello!
     */
    @Get('/')
    getHello(): number[] {
        return [1, 2, 3];
    }
}

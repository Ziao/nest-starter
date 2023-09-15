import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';
import { TodoController } from './todo/todo.controller';
import { AppController } from './app.controller';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        DbModule,
        // LoggerModule.forRoot({ pinoHttp: { quietReqLogger: true, autoLogging: false } }),
    ],
    controllers: [AppController, TodoController],
})
export class AppModule {}

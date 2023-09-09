import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { LoggerModule } from 'nestjs-pino';
import { DbModule } from '../db/db.module';
import { AppController } from './app.controller';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        DbModule,
        LoggerModule.forRoot({
            pinoHttp: { quietReqLogger: true, autoLogging: false },
        }),
    ],
    controllers: [AppController],
})
export class AppModule {}

import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from 'nestjs-pino';
import { AppModule } from './app/app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        cors: false,
    });

    app.useLogger(app.get(Logger));
    app.useGlobalPipes(
        new ValidationPipe({
            // https://docs.nestjs.com/techniques/validation#using-the-built-in-validationpipe

            // Strip out unknown properties
            whitelist: true,

            // Transform incoming data to DTO types
            transform: true,

            // Make sure validation errors are returned
            disableErrorMessages: false,
        }),
    );

    configureSwagger(app);

    await app.listen(3000);
}
bootstrap().then(() => {
    console.log('App started on port 3000');
});

const configureSwagger = (app: INestApplication) => {
    const config = new DocumentBuilder()
        .setTitle('Todo example')
        .setDescription('The todo API description')
        .setVersion('1.0')
        .addServer('http://localhost:3000') // todo: env
        .addTag('default')
        .build();
    // https://docs.nestjs.com/openapi/introduction#document-options
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
};

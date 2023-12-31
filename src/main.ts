import { INestApplication, Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

const logger = new Logger('App');
const port = Number(process.env.PORT) || 5000;

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        cors: false,
    });

    app.enableCors({
        origin: '*',
    });
    // app.useLogger(app.get(Logger));
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

    await app.listen(port);
}
bootstrap().then(() => {
    logger.log(`App started on port ${port}`);
});

const configureSwagger = (app: INestApplication) => {
    const config = new DocumentBuilder()
        .setTitle('Todo example')
        .setDescription('The todo API description')
        .setVersion('1.0')
        .addServer('http://localhost:3000') // todo: env
        // .addTag('default')
        .build();
    // https://docs.nestjs.com/openapi/introduction#document-options
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
};

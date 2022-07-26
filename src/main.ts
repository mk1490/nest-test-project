import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";
import {ValidationPipe} from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    // Set global prefix for api.
    app.setGlobalPrefix('api/v1');

    // Initalize swagger
    const config = new DocumentBuilder()
        .setTitle('Nest test project')
        .setDescription('Matin kafshdooz`s test nest backend project')
        .setVersion('1.0')
        .setBasePath('api/v1/')
        .addBearerAuth({
            type: "http"
        })
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document);


    // Set validation
    app.useGlobalPipes(new ValidationPipe({
        skipMissingProperties: false,
    }));


    await app.listen(3000);
}

bootstrap();

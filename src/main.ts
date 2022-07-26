import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

async function bootstrap() {
    const app = await NestFactory.create(AppModule);


    // Initalize swagger
    const config = new DocumentBuilder()
        .setTitle('Nest test project')
        .setDescription('Matin kafshdooz`s test nest backend project')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    // Set global prefix for api.
    app.setGlobalPrefix('api/v1');
    await app.listen(3000);
}

bootstrap();

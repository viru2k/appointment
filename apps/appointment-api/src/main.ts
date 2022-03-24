/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { AppModule } from './app/app.module';

//Nest
import { NestFactory } from '@nestjs/core';

// Swagger
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

// Pipes
import { Logger, ValidationPipe } from '@nestjs/common';

// Interceptors
import { TransformInterceptor } from './app/interceptors/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new TransformInterceptor());
  const config = new DocumentBuilder()
    .setTitle('APPOINTMENT API')
    .setDescription('The appointment API description')
    .setVersion('1.0')
    .addTag('develop')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();

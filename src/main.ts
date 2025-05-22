import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyLoggerService } from './my-logger/my-logger.service';
import { AllExceptionsFilter } from './all-exceptions.filter';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import { Request, Response, NextFunction } from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      "http://localhost:3001",
      /\.vercel\.app$/,
      'http://185.151.51.28:5001', 
      "http://localhost:5001",
      "https://blindsandcurtains.ae",
      "https://www.blindsandcurtains.ae",
      "http://185.151.51.28:5004",
       "https://avenue39.com/",
         "https://www.avenue39.com",
          "https://www.avenue39.com",
          "https://bncprod.vercel.app/",
          "https://bncprod.vercel.app",
              /\.vercel\.app$/,


    ],
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    preflightContinue: false,
    allowedHeaders: ['Content-Type',"Authorization", 'authorization'],
    
  })

  const { httpAdapter } = app.get(HttpAdapterHost) 
  
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter))

  app.setGlobalPrefix('backend/api');
  app.use(bodyParser.json({limit: '100mb'}));
  app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));


  const config = new DocumentBuilder()
  .setTitle('Blind and curtains')
  .setDescription('Docs for blind and curtains')
  .setVersion('1.0')
  .addTag('BNC')
  .build();
const document = SwaggerModule.createDocument(app, config);

SwaggerModule.setup('docs', app, document);
  await app.listen(5002);
}
bootstrap();

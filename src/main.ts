import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyLoggerService } from './my-logger/my-logger.service';
import { AllExceptionsFilter } from './all-exceptions.filter';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'http://localhost:3000',
      'http://localhost:3001',
      "http://localhost:3001",
      /\.vercel\.app$/
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
  })

  const { httpAdapter } = app.get(HttpAdapterHost) 
  
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter))

  app.setGlobalPrefix('api');
  app.use(bodyParser.json({limit: '50mb'}));
  app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


  const config = new DocumentBuilder()
  .setTitle('Blind and curtains')
  .setDescription('Docs for blind and curtains')
  .setVersion('1.0')
  .addTag('BNC')
  .build();
const document = SwaggerModule.createDocument(app, config);

SwaggerModule.setup('docs', app, document);
  await app.listen(3200);
}
bootstrap();

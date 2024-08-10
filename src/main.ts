import { NestFactory, HttpAdapterHost } from '@nestjs/core';
import { AppModule } from './app.module';
import { MyLoggerService } from './my-logger/my-logger.service';
import { AllExceptionsFilter } from './all-exceptions.filter';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { httpAdapter } = app.get(HttpAdapterHost) 
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter))

  app.setGlobalPrefix('api');

  app.setGlobalPrefix('docs');
  const config = new DocumentBuilder()
  .setTitle('Blind and curtains')
  .setDescription('Docs for blind and curtains')
  .setVersion('1.0')
  .addTag('BNC')
  .build();
const document = SwaggerModule.createDocument(app, config);

  await app.listen(3200);
}
bootstrap();

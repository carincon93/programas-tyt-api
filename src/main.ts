import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.use(cookieParser());

  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Programas TyT')
    .setDescription('Programas TyT')
    .setVersion('1.0')
    .addTag('programas-tyt')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Lista de orígenes permitidos
  const allowedOrigins = process.env.CORS_ALLOWED_ORIGINS?.split(',') || [];

  // Configurar CORS con validación de origen
  app.enableCors({
    origin: 'https://page-t-y-t.vercel.app',
    credentials: true, // Permitir cookies y cabeceras de autorización
  });

  await app.listen(PORT);
}

bootstrap();

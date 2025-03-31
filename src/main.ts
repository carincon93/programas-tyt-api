import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as express from 'express';

const server: express.Application = express();

const PORT = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter(server));

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
    origin: (origin, callback) => {
      console.log('ORIGIN:', origin);

      // Permitir solicitudes sin origen (como Postman o herramientas locales)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true); // Permitir el origen si está en la lista
      } else {
        callback(new Error('Not allowed by CORS')); // Rechazar el origen
      }
    },
    credentials: true, // Permitir cookies y cabeceras de autorización
  });

  await app.listen(PORT);
}

bootstrap();

export default server;
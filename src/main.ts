import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'; // Importa ValidationPipe
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurar CORS permisivo para desarrollo local
  app.enableCors({
    origin: true, // Permite todas las origenes
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
    allowedHeaders: 'Content-Type, Accept, Authorization',
  });

  // Configurar el prefijo global para todas las rutas
  app.setGlobalPrefix('dev/v1', {
    exclude: ['/'], // Excluir la ruta raíz si es necesario
  });

  // Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('Tenpo API')
    .setDescription(
      'API de Tenpo para gestión de beneficios y tarjetas de crédito',
    )
    .setVersion('1.0')
    .addTag('benefits', 'Endpoints relacionados con beneficios')
    .addTag('credit-card', 'Endpoints relacionados con tarjetas de crédito')
    .addTag('summary', 'Endpoints relacionados con resúmenes financieros')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Habilita la transformación de tipos (ej. string a number)
      whitelist: true, // Elimina propiedades que no están definidas en el DTO
      forbidNonWhitelisted: true, // Lanza un error si hay propiedades no permitidas
    }),
  );
  await app.listen(3000);
}
void bootstrap();

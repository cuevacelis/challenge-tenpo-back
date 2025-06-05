"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
        allowedHeaders: 'Content-Type, Accept, Authorization',
    });
    app.setGlobalPrefix('dev/v1', {
        exclude: ['/'],
    });
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Tenpo API')
        .setDescription('API de Tenpo para gestión de beneficios y tarjetas de crédito')
        .setVersion('1.0')
        .addTag('benefits', 'Endpoints relacionados con beneficios')
        .addTag('credit-card', 'Endpoints relacionados con tarjetas de crédito')
        .addTag('summary', 'Endpoints relacionados con resúmenes financieros')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api/docs', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
    }));
    const port = process.env.PORT || 3000;
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map
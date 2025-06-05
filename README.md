# Tenpo API

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descripción

API de Tenpo para gestión de beneficios y tarjetas de crédito. Esta API proporciona endpoints para:
- Gestión de beneficios y descuentos
- Información de tarjetas de crédito y transacciones
- Resúmenes financieros

## Documentación de la API

La documentación completa de la API está disponible en Swagger UI cuando la aplicación está en ejecución:
```
http://localhost:3000/api/docs
```

### Prefijo de la API

Todas las rutas de la API están bajo el prefijo `/dev/v1/`

### Endpoints Principales

#### Beneficios
- `GET /dev/v1/benefits`
  - Obtiene la lista de beneficios disponibles
  - Parámetros de consulta:
    - `type`: Tipo de beneficio (all, restaurants, shopping, transport, entertainment)
    - `page`: Número de página (default: 1)
    - `limit`: Elementos por página (default: 10)

#### Tarjeta de Crédito
- `GET /dev/v1/credit-card/info`
  - Obtiene información de la tarjeta y transacciones
  - Parámetros de consulta:
    - `search`: Término de búsqueda para filtrar transacciones
    - `startDate`: Fecha de inicio (YYYY-MM-DD)
    - `endDate`: Fecha de fin (YYYY-MM-DD)
    - `minAmount`: Monto mínimo
    - `maxAmount`: Monto máximo
    - `page`: Número de página
    - `limit`: Elementos por página

#### Resumen Financiero
- `GET /dev/v1/summary`
  - Obtiene el resumen financiero
  - Parámetros de consulta:
    - `startDate`: Fecha de inicio para filtrar actividades
    - `endDate`: Fecha de fin para filtrar actividades
    - `page`: Número de página
    - `limit`: Elementos por página

## Configuración del Proyecto

### Requisitos Previos
- Node.js (versión recomendada: >= 18)
- pnpm (gestor de paquetes)

### Instalación

```bash
# Instalar dependencias
$ pnpm install
```

### Ejecución

```bash
# Desarrollo
$ pnpm run start

# Modo observador (desarrollo)
$ pnpm run start:dev

# Producción
$ pnpm run start:prod
```

### Pruebas

```bash
# Pruebas unitarias
$ pnpm run test

# Pruebas e2e
$ pnpm run test:e2e

# Cobertura de pruebas
$ pnpm run test:cov
```

## Estructura del Proyecto

```
src/
├── benefit/           # Módulo de beneficios
├── credit-card/       # Módulo de tarjeta de crédito
├── summary/          # Módulo de resumen financiero
├── app.controller.ts # Controlador principal
├── app.module.ts     # Módulo principal
└── main.ts          # Punto de entrada de la aplicación
```

## Tecnologías Utilizadas

- [NestJS](https://nestjs.com/) - Framework para construir aplicaciones del lado del servidor
- [TypeScript](https://www.typescriptlang.org/) - Superset tipado de JavaScript
- [Swagger](https://swagger.io/) - Documentación de la API
- [class-validator](https://github.com/typestack/class-validator) - Validación de datos
- [class-transformer](https://github.com/typestack/class-transformer) - Transformación de objetos

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ pnpm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).

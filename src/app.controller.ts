import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('app')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Endpoint de salud de la aplicación' })
  @ApiResponse({
    status: 200,
    description:
      'Retorna un mensaje de confirmación de que la API está funcionando',
    schema: {
      type: 'object',
      properties: {
        message: {
          type: 'string',
          example: 'Hello World!',
          description: 'Mensaje de confirmación',
        },
      },
    },
  })
  getHello(): string {
    return this.appService.getHello();
  }
}

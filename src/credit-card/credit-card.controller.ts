import {
  Controller,
  Get,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreditCardService } from './credit-card.service';
import { CreditCardTransactionQueryDto } from './dto/credit-card.dto';
import { PaginationDto } from '../benefit/dto/pagination.dto';

@ApiTags('credit-card')
@Controller('credit-card')
export class CreditCardController {
  constructor(private readonly creditCardService: CreditCardService) {}

  @Get('info')
  @UsePipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      transformOptions: { enableImplicitConversion: true },
    }),
  )
  @ApiOperation({
    summary: 'Obtener información de la tarjeta de crédito y transacciones',
  })
  @ApiResponse({
    status: 200,
    description:
      'Información de la tarjeta y transacciones obtenida exitosamente',
  })
  getCreditCardInfo(
    @Query('search') search?: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('minAmount') minAmount?: number,
    @Query('maxAmount') maxAmount?: number,
    @Query('page') page?: number,
    @Query('limit') limit?: number,
  ) {
    const filterDto: CreditCardTransactionQueryDto = {
      search,
      startDate,
      endDate,
      minAmount,
      maxAmount,
    };

    const pagination: PaginationDto = {
      page: page ?? 1,
      limit: limit ?? 10,
    };

    return this.creditCardService.getCreditCardSummaryAndTransactions(
      filterDto,
      pagination,
    );
  }
}

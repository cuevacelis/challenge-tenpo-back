import {
  Controller,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreditCardService } from './credit-card.service';
import { FilterCreditCardDto } from './dto/credit-card.dto';

@Controller('credit-card')
export class CreditCardController {
  constructor(private readonly creditCardService: CreditCardService) {}

  @Post('info')
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true })) // Aplica la validación y transformación
  getCreditCardInfo(@Body() filterDto: FilterCreditCardDto) {
    return this.creditCardService.getCreditCardSummaryAndTransactions(
      filterDto,
    );
  }
}

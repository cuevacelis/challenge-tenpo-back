import {
  IsString,
  IsNumber,
  IsDateString,
  IsOptional,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

export class TransactionDto {
  @IsString()
  id: string;

  @IsString()
  description: string;

  @IsNumber()
  amount: number;

  @IsDateString()
  date: string;
}

export class CreditCardInfoDto {
  @IsString()
  cardNumber: string; // En un escenario real, nunca devolverías el número completo de la tarjeta. Esto es solo para mock.

  @IsNumber()
  totalLimit: number;

  @IsNumber()
  consumedAmount: number;

  @IsNumber()
  amountToPay: number;

  @IsDateString()
  cutOffDate: string;

  @IsDateString()
  paymentDueDate: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => TransactionDto)
  transactions: TransactionDto[];
}

export class PaginationDto {
  @IsOptional()
  @IsNumber()
  @Type(() => Number) // Esto es importante para transformar el string del query param a número
  page?: number = 1;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  limit?: number = 10;
}

export class FilterCreditCardDto extends PaginationDto {
  @IsOptional()
  @IsString()
  search?: string; // Por ejemplo, para buscar en la descripción de las transacciones.

  @IsOptional()
  @IsDateString()
  startDate?: string;

  @IsOptional()
  @IsDateString()
  endDate?: string;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  minAmount?: number;

  @IsOptional()
  @IsNumber()
  @Type(() => Number)
  maxAmount?: number;
}

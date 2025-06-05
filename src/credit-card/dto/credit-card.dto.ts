import {
  IsString,
  IsNumber,
  IsDateString,
  IsOptional,
  Min,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export enum TransactionType {
  FOOD = 'FOOD',
  TRANSACTION = 'TRANSACTION',
  CARD_PAYMENT = 'CARD_PAYMENT',
  DEPOSIT = 'DEPOSIT',
}

export class TransactionDto {
  @IsString()
  id: string;

  @IsString()
  description: string;

  @IsNumber()
  amount: number;

  @IsDateString()
  date: string;

  @IsString()
  type: TransactionType;
}

export class CreditCardTransactionQueryDto {
  @ApiProperty({
    description: 'Término de búsqueda para filtrar transacciones',
    required: false,
  })
  @IsOptional()
  @IsString()
  search?: string;

  @ApiProperty({
    description: 'Fecha de inicio para filtrar transacciones',
    required: false,
    example: '2024-01-01',
  })
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiProperty({
    description: 'Fecha de fin para filtrar transacciones',
    required: false,
    example: '2024-12-31',
  })
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @ApiProperty({
    description: 'Monto mínimo para filtrar transacciones',
    required: false,
    minimum: 0,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  minAmount?: number;

  @ApiProperty({
    description: 'Monto máximo para filtrar transacciones',
    required: false,
    minimum: 0,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  maxAmount?: number;
}

export class CreditCardTransactionDto {
  @ApiProperty({ description: 'ID de la transacción' })
  id: string;

  @ApiProperty({ description: 'Fecha de la transacción' })
  date: string;

  @ApiProperty({ description: 'Descripción de la transacción' })
  description: string;

  @ApiProperty({ description: 'Monto de la transacción' })
  amount: number;

  @ApiProperty({ description: 'Estado de la transacción', required: false })
  status?: string;

  @ApiProperty({ enum: TransactionType, description: 'Tipo de transacción' })
  type: TransactionType;
}

export class CreditCardInfoDto {
  @ApiProperty({ description: 'Número de tarjeta' })
  cardNumber: string; // En un escenario real, nunca devolverías el número completo de la tarjeta. Esto es solo para mock.

  @ApiProperty({ description: 'Límite total de la tarjeta' })
  totalLimit: number;

  @ApiProperty({ description: 'Monto consumido' })
  consumedAmount: number;

  @ApiProperty({ description: 'Monto a pagar' })
  amountToPay: number;

  @ApiProperty({ description: 'Fecha de corte' })
  cutOffDate: string;

  @ApiProperty({ description: 'Fecha de pago' })
  paymentDueDate: string;

  @ApiProperty({ type: [CreditCardTransactionDto] })
  transactions: CreditCardTransactionDto[];
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

export class CreditCardSummaryResponse {
  @ApiProperty({ type: CreditCardInfoDto })
  summary: Omit<CreditCardInfoDto, 'transactions'>;

  @ApiProperty({ type: [CreditCardTransactionDto] })
  transactions: CreditCardTransactionDto[];

  @ApiProperty({
    description: 'Información de paginación',
    type: 'object',
    properties: {
      total: { type: 'number', description: 'Total de transacciones' },
      page: { type: 'number', description: 'Página actual' },
      limit: { type: 'number', description: 'Elementos por página' },
      totalPages: { type: 'number', description: 'Total de páginas' },
      hasNextPage: {
        type: 'boolean',
        description: '¿Existe página siguiente?',
      },
      hasPreviousPage: {
        type: 'boolean',
        description: '¿Existe página anterior?',
      },
    },
  })
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsNumber, Min, IsDateString } from 'class-validator';
import { Type } from 'class-transformer';

export class RecentActivityDto {
  @ApiProperty({ description: 'Tipo de actividad' })
  type: string;

  @ApiProperty({ description: 'Nombre de la actividad' })
  name: string;

  @ApiProperty({ description: 'Monto de la transacción' })
  amount: number;

  @ApiProperty({ description: 'Tipo de transacción (gasto/pago)' })
  transactionType: 'expense' | 'payment';

  @ApiProperty({ description: 'Fecha de la transacción en UTC' })
  date: string;
}

export class SummaryResponseDto {
  @ApiProperty({ description: 'Saldo total disponible' })
  totalBalance: number;

  @ApiProperty({ description: 'Ingreso del mes actual' })
  currentMonthIncome: number;

  @ApiProperty({
    description:
      'Porcentaje de cambio en ingresos comparado con el mes anterior',
  })
  incomeChangePercentage: number;

  @ApiProperty({ description: 'Gasto del mes actual' })
  currentMonthExpense: number;

  @ApiProperty({
    description: 'Porcentaje de cambio en gastos comparado con el mes anterior',
  })
  expenseChangePercentage: number;

  @ApiProperty({ description: 'Gasto total en tarjeta de crédito' })
  creditCardSpent: number;

  @ApiProperty({ description: 'Saldo disponible en tarjeta de crédito' })
  creditCardAvailableBalance: number;

  @ApiProperty({ description: 'Gasto en inversiones' })
  investmentAmount: number;

  @ApiProperty({
    description:
      'Porcentaje de cambio en inversiones comparado con el mes anterior',
  })
  investmentChangePercentage: number;

  @ApiProperty({ type: [RecentActivityDto], description: 'Actividad reciente' })
  recentActivity: RecentActivityDto[];
}

export class SummaryQueryDto {
  @ApiProperty({
    required: false,
    description: 'Fecha de inicio para filtrar actividades',
  })
  @IsOptional()
  @IsDateString()
  startDate?: string;

  @ApiProperty({
    required: false,
    description: 'Fecha de fin para filtrar actividades',
  })
  @IsOptional()
  @IsDateString()
  endDate?: string;

  @ApiProperty({ required: false, description: 'Número de página' })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  page?: number;

  @ApiProperty({
    required: false,
    description: 'Límite de registros por página',
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  limit?: number;
}

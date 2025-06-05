import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, Min, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { BenefitType } from './benefit.dto';

export class PaginationDto {
  @ApiProperty({
    description: 'Número de página',
    required: false,
    default: 1,
    minimum: 1,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  page?: number = 1;

  @ApiProperty({
    description: 'Cantidad de elementos por página',
    required: false,
    default: 10,
    minimum: 1,
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  limit?: number = 10;
}

export class GetBenefitsQueryDto extends PaginationDto {
  @ApiProperty({
    enum: BenefitType,
    description: 'Tipo de beneficio para filtrar',
    required: false,
    default: BenefitType.ALL,
  })
  @IsOptional()
  @IsEnum(BenefitType)
  type?: BenefitType = BenefitType.ALL;
}

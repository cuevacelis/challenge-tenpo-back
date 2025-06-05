import { ApiProperty } from '@nestjs/swagger';

export enum BenefitType {
  ALL = 'all',
  RESTAURANTS = 'restaurants',
  SHOPPING = 'shopping',
  TRANSPORT = 'transport',
  ENTERTAINMENT = 'entertainment',
}

export class BenefitItemDto {
  @ApiProperty({ description: 'Nombre del beneficio' })
  name: string;

  @ApiProperty({ enum: BenefitType, description: 'Tipo de beneficio' })
  type: BenefitType;

  @ApiProperty({ description: 'Porcentaje de descuento' })
  discount: number;

  @ApiProperty({ description: 'Descripción breve del beneficio' })
  description: string;

  @ApiProperty({ description: 'Fecha de validez del beneficio' })
  validUntil: Date;

  @ApiProperty({ description: 'Ubicación del beneficio' })
  location: string;

  @ApiProperty({ description: 'Nombre del icono de Lucide React' })
  iconName: string;
}

export class PaginationMetaDto {
  @ApiProperty({ description: 'Número total de páginas' })
  totalPages: number;

  @ApiProperty({ description: 'Número total de elementos' })
  totalItems: number;

  @ApiProperty({ description: 'Página actual' })
  currentPage: number;

  @ApiProperty({ description: 'Elementos por página' })
  itemsPerPage: number;

  @ApiProperty({ description: '¿Existe página siguiente?' })
  hasNextPage: boolean;

  @ApiProperty({ description: '¿Existe página anterior?' })
  hasPreviousPage: boolean;
}

export class BenefitResponseDto {
  @ApiProperty({ description: 'Total de beneficios disponibles' })
  totalBenefits: number;

  @ApiProperty({ description: 'Ahorro total del mes actual' })
  monthlySavings: number;

  @ApiProperty({ description: 'Número de beneficios utilizados' })
  usedBenefits: number;

  @ApiProperty({
    enum: BenefitType,
    description: 'Tipo de beneficio seleccionado',
  })
  selectedType: BenefitType;

  @ApiProperty({
    type: [BenefitItemDto],
    description: 'Lista de beneficios disponibles',
  })
  benefits: BenefitItemDto[];

  @ApiProperty({
    type: PaginationMetaDto,
    description: 'Información de paginación',
  })
  pagination: PaginationMetaDto;
}

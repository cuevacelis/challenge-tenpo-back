import { ApiProperty } from '@nestjs/swagger';

export enum BenefitType {
  ALL = 'all',
  RESTAURANTS = 'restaurants',
  SHOPPING = 'shopping',
  TRANSPORT = 'transport',
  ENTERTAINMENT = 'entertainment',
}

export enum BenefitColor {
  ALL = '#6B7280', // gris
  RESTAURANTS = '#EF4444', // rojo
  SHOPPING = '#3B82F6', // azul
  TRANSPORT = '#10B981', // verde
  ENTERTAINMENT = '#8B5CF6', // morado
}

export class BenefitCategoryDto {
  @ApiProperty({ description: 'ID único de la categoría' })
  id: string;

  @ApiProperty({ description: 'Nombre técnico de la categoría' })
  name: string;

  @ApiProperty({ description: 'Nombre para mostrar en la UI' })
  displayName: string;

  @ApiProperty({ description: 'Nombre del icono de Lucide React' })
  iconName: string;

  @ApiProperty({
    enum: BenefitColor,
    description: 'Color hexadecimal para el icono y elementos UI',
    example: '#EF4444',
  })
  color: BenefitColor;
}

export class BenefitCategoriesResponseDto {
  @ApiProperty({
    type: [BenefitCategoryDto],
    description: 'Lista de categorías disponibles',
  })
  categories: BenefitCategoryDto[];
}

export class BenefitItemDto {
  @ApiProperty({ description: 'ID único del beneficio' })
  id: string;

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

  @ApiProperty({
    enum: BenefitColor,
    description: 'Color hexadecimal para el icono y elementos UI',
    example: '#EF4444',
  })
  color: BenefitColor;
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

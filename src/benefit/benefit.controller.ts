import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BenefitService } from './benefit.service';
import {
  BenefitResponseDto,
  BenefitCategoriesResponseDto,
} from './dto/benefit.dto';
import { GetBenefitsQueryDto } from './dto/pagination.dto';

@ApiTags('benefits')
@Controller('benefits')
export class BenefitController {
  constructor(private readonly benefitService: BenefitService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener lista de beneficios paginada' })
  @ApiResponse({
    status: 200,
    description: 'Lista de beneficios obtenida exitosamente',
    type: BenefitResponseDto,
  })
  getBenefits(@Query() query: GetBenefitsQueryDto): BenefitResponseDto {
    return this.benefitService.getBenefits(query);
  }

  @Get('categories')
  @ApiOperation({ summary: 'Obtener lista de categorías disponibles' })
  @ApiResponse({
    status: 200,
    description: 'Lista de categorías obtenida exitosamente',
    type: BenefitCategoriesResponseDto,
  })
  getCategories(): BenefitCategoriesResponseDto {
    return this.benefitService.getCategories();
  }
}

import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BenefitService } from './benefit.service';
import { BenefitResponseDto, BenefitType } from './dto/benefit.dto';
import { PaginationDto } from './dto/pagination.dto';

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
  getBenefits(
    @Query('type') type: BenefitType = BenefitType.ALL,
    @Query() pagination: PaginationDto = { page: 1, limit: 10 },
  ): BenefitResponseDto {
    return this.benefitService.getBenefits(type, pagination);
  }
}

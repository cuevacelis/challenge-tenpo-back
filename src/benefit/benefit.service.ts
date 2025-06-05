import { Injectable } from '@nestjs/common';
import {
  BenefitResponseDto,
  BenefitType,
  PaginationMetaDto,
} from './dto/benefit.dto';
import { PaginationDto } from './dto/pagination.dto';
import { mockBenefits } from './dto/mock-benefits';

@Injectable()
export class BenefitService {
  getBenefits(
    type: BenefitType = BenefitType.ALL,
    pagination: PaginationDto = { page: 1, limit: 10 },
  ): BenefitResponseDto {
    const filteredBenefits =
      type === BenefitType.ALL
        ? mockBenefits
        : mockBenefits.filter((benefit) => benefit.type === type);

    const totalItems = filteredBenefits.length;
    const totalPages = Math.ceil(totalItems / (pagination.limit ?? 10));
    const currentPage = Math.min(pagination.page ?? 1, totalPages || 1);
    const startIndex = (currentPage - 1) * (pagination.limit ?? 10);
    const endIndex = startIndex + (pagination.limit ?? 10);

    const paginatedBenefits = filteredBenefits.slice(startIndex, endIndex);

    const monthlySavings = this.calculateMonthlySavings();
    const usedBenefits = this.getUsedBenefitsCount();

    const paginationMeta: PaginationMetaDto = {
      totalPages,
      totalItems,
      currentPage,
      itemsPerPage: pagination.limit ?? 10,
      hasNextPage: currentPage < totalPages,
      hasPreviousPage: currentPage > 1,
    };

    return {
      totalBenefits: mockBenefits.length,
      monthlySavings,
      usedBenefits,
      selectedType: type,
      benefits: paginatedBenefits,
      pagination: paginationMeta,
    };
  }

  private calculateMonthlySavings(): number {
    // Simulación de cálculo de ahorro mensual
    return 1500;
  }

  private getUsedBenefitsCount(): number {
    // Simulación de conteo de beneficios usados
    return 3;
  }
}

import { Injectable } from '@nestjs/common';
import {
  BenefitResponseDto,
  BenefitType,
  PaginationMetaDto,
  BenefitCategoriesResponseDto,
} from './dto/benefit.dto';
import { GetBenefitsQueryDto } from './dto/pagination.dto';
import { mockBenefits, mockCategories } from './dto/mock-benefits';

@Injectable()
export class BenefitService {
  getBenefits(query: GetBenefitsQueryDto): BenefitResponseDto {
    const { type = BenefitType.ALL, page = 1, limit = 10 } = query;

    const filteredBenefits =
      type === BenefitType.ALL
        ? mockBenefits
        : mockBenefits.filter((benefit) => benefit.type === type);

    const totalItems = filteredBenefits.length;
    const totalPages = Math.ceil(totalItems / limit);
    const currentPage = Math.min(page, totalPages || 1);
    const startIndex = (currentPage - 1) * limit;
    const endIndex = startIndex + limit;

    const paginatedBenefits = filteredBenefits.slice(startIndex, endIndex);

    const monthlySavings = this.calculateMonthlySavings();
    const usedBenefits = this.getUsedBenefitsCount();

    const paginationMeta: PaginationMetaDto = {
      totalPages,
      totalItems,
      currentPage,
      itemsPerPage: limit,
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

  getCategories(): BenefitCategoriesResponseDto {
    return {
      categories: mockCategories,
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

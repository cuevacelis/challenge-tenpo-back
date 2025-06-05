import { Injectable } from '@nestjs/common';
import {
  CreditCardInfoDto,
  CreditCardTransactionQueryDto,
  CreditCardSummaryResponse,
} from './dto/credit-card.dto';
import { mockCreditCardData } from './dto/mock-credit-card.data';
import { PaginationDto } from '../benefit/dto/pagination.dto';

@Injectable()
export class CreditCardService {
  private creditCardData: CreditCardInfoDto;

  constructor() {
    this.creditCardData = mockCreditCardData;
  }

  getCreditCardSummaryAndTransactions(
    filterDto: CreditCardTransactionQueryDto,
    pagination: PaginationDto = { page: 1, limit: 10 },
  ): CreditCardSummaryResponse {
    let filteredTransactions = [...this.creditCardData.transactions];

    // Aplicar filtros
    if (filterDto.search) {
      const searchTerm = filterDto.search.toLowerCase();
      filteredTransactions = filteredTransactions.filter((t) =>
        t.description.toLowerCase().includes(searchTerm),
      );
    }

    if (filterDto.startDate) {
      const startDate = new Date(filterDto.startDate);
      filteredTransactions = filteredTransactions.filter(
        (t) => new Date(t.date) >= startDate,
      );
    }

    if (filterDto.endDate) {
      const endDate = new Date(filterDto.endDate);
      filteredTransactions = filteredTransactions.filter(
        (t) => new Date(t.date) <= endDate,
      );
    }

    if (filterDto.minAmount) {
      filteredTransactions = filteredTransactions.filter(
        (t) => t.amount >= (filterDto.minAmount ?? 0),
      );
    }

    if (filterDto.maxAmount) {
      filteredTransactions = filteredTransactions.filter(
        (t) => t.amount <= (filterDto.maxAmount ?? 0),
      );
    }

    // Paginación
    const totalItems = filteredTransactions.length;
    const totalPages = Math.ceil(totalItems / (pagination.limit ?? 10));
    const currentPage = Math.min(pagination.page ?? 1, totalPages || 1);
    const startIndex = (currentPage - 1) * (pagination.limit ?? 10);
    const endIndex = startIndex + (pagination.limit ?? 10);

    const paginatedTransactions = filteredTransactions.slice(
      startIndex,
      endIndex,
    );

    const summary: CreditCardSummaryResponse['summary'] = {
      cardNumber: this.creditCardData.cardNumber,
      totalLimit: this.creditCardData.totalLimit,
      consumedAmount: this.creditCardData.consumedAmount,
      amountToPay: this.creditCardData.amountToPay,
      cutOffDate: this.creditCardData.cutOffDate,
      paymentDueDate: this.creditCardData.paymentDueDate,
    };

    return {
      summary,
      transactions: paginatedTransactions,
      pagination: {
        total: totalItems,
        page: currentPage,
        limit: pagination.limit ?? 10,
        totalPages,
        hasNextPage: currentPage < totalPages,
        hasPreviousPage: currentPage > 1,
      },
    };
  }
}

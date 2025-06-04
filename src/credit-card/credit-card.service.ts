import { Injectable } from '@nestjs/common';
import {
  CreditCardInfoDto,
  TransactionDto,
  FilterCreditCardDto,
} from './dto/credit-card.dto';
import { v4 as uuidv4 } from 'uuid'; // Para generar IDs únicos

@Injectable()
export class CreditCardService {
  private creditCardData: CreditCardInfoDto;

  constructor() {
    this.creditCardData = this.generateMockCreditCardData();
  }

  private generateMockCreditCardData(): CreditCardInfoDto {
    const transactions: TransactionDto[] = [];
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    // Generar transacciones para el mes actual y anterior
    for (let i = 0; i < 30; i++) {
      const date = new Date(
        currentYear,
        currentMonth,
        Math.floor(Math.random() * 28) + 1,
      ); // Fechas aleatorias del mes actual
      transactions.push({
        id: uuidv4(),
        description: `Compra en ${this.getRandomStore()}`,
        amount: parseFloat((Math.random() * 200 + 5).toFixed(2)), // entre 5 y 205
        date: date.toISOString().split('T')[0], // Formato YYYY-MM-DD
      });
    }

    // Algunas transacciones del mes anterior para probar el filtrado por fecha
    const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    for (let i = 0; i < 10; i++) {
      const date = new Date(
        prevYear,
        prevMonth,
        Math.floor(Math.random() * 28) + 1,
      );
      transactions.push({
        id: uuidv4(),
        description: `Compra antigua en ${this.getRandomStore()}`,
        amount: parseFloat((Math.random() * 100 + 10).toFixed(2)),
        date: date.toISOString().split('T')[0],
      });
    }

    const totalLimit = 5000;
    const consumedAmount = transactions.reduce((sum, t) => sum + t.amount, 0);
    const amountToPay = consumedAmount * 0.8; // Simulación

    // Calcular fecha de corte (por ejemplo, el día 20 del mes)
    const cutOffDay = 20;
    const cutOffDate = new Date(currentYear, currentMonth, cutOffDay);
    if (today.getDate() > cutOffDay) {
      cutOffDate.setMonth(cutOffDate.getMonth() + 1); // Si ya pasó la fecha de corte, es para el próximo mes
    }

    // Calcular fecha de pago (por ejemplo, 10 días después de la fecha de corte)
    const paymentDueDate = new Date(cutOffDate);
    paymentDueDate.setDate(paymentDueDate.getDate() + 10);

    return {
      cardNumber: 'XXXX-XXXX-XXXX-1234', // Mocked card number
      totalLimit: totalLimit,
      consumedAmount: parseFloat(consumedAmount.toFixed(2)),
      amountToPay: parseFloat(amountToPay.toFixed(2)),
      cutOffDate: cutOffDate.toISOString().split('T')[0],
      paymentDueDate: paymentDueDate.toISOString().split('T')[0],
      transactions: transactions.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      ), // Ordenar por fecha descendente
    };
  }

  private getRandomStore(): string {
    const stores = [
      'Supermercado La Esquina',
      'Tienda Departamental El Centro',
      'Cafetería Express',
      'Farmacia Salud+',
      'Gasolinera Rapida',
      'Restaurante Delicias',
      'Librería El Saber',
      'Cinepolis',
      'Mercado Central',
    ];
    return stores[Math.floor(Math.random() * stores.length)];
  }

  getCreditCardSummaryAndTransactions(filterDto: FilterCreditCardDto): {
    summary: Omit<CreditCardInfoDto, 'transactions'>;
    transactions: TransactionDto[];
    pagination: {
      total: number;
      page: number;
      limit: number;
      totalPages: number;
    };
  } {
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
    const page = filterDto.page || 1;
    const limit = filterDto.limit || 10;
    const total = filteredTransactions.length;
    const totalPages = Math.ceil(total / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const paginatedTransactions = filteredTransactions.slice(
      startIndex,
      endIndex,
    );

    const summary: Omit<CreditCardInfoDto, 'transactions'> = {
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
        total,
        page,
        limit,
        totalPages,
      },
    };
  }
}

import { RecentActivityDto, SummaryResponseDto } from './summary.dto';

const mockRecentActivity: RecentActivityDto[] = [
  {
    type: 'TRANSFER',
    name: 'Transferencia recibida',
    amount: 150000,
    transactionType: 'payment',
    date: '2024-03-15T10:30:00Z',
  },
  {
    type: 'CREDIT_CARD',
    name: 'Compra en Supermercado',
    amount: 4500,
    transactionType: 'expense',
    date: '2024-03-14T15:45:00Z',
  },
  {
    type: 'INVESTMENT',
    name: 'Compra de acciones',
    amount: 50000,
    transactionType: 'expense',
    date: '2024-03-13T09:15:00Z',
  },
  {
    type: 'PAYMENT',
    name: 'Pago de servicios',
    amount: 7500,
    transactionType: 'expense',
    date: '2024-03-12T14:20:00Z',
  },
];

export const mockSummaryData: SummaryResponseDto = {
  totalBalance: 250000,
  currentMonthIncome: 180000,
  incomeChangePercentage: 5.2,
  currentMonthExpense: 120000,
  expenseChangePercentage: -2.1,
  creditCardSpent: 45000,
  creditCardAvailableBalance: 155000,
  investmentAmount: 75000,
  investmentChangePercentage: 12.5,
  recentActivity: mockRecentActivity,
};

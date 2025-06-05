import { RecentActivityDto, SummaryResponseDto } from './summary.dto';

const mockRecentActivity: RecentActivityDto[] = [
  {
    type: 'TRANSFER',
    name: 'Transferencia recibida',
    amount: 1500000,
    transactionType: 'payment',
    date: '2024-03-15T10:30:00Z',
  },
  {
    type: 'CREDIT_CARD',
    name: 'Compra en Supermercado',
    amount: 45000,
    transactionType: 'expense',
    date: '2024-03-14T15:45:00Z',
  },
  {
    type: 'INVESTMENT',
    name: 'Compra de acciones',
    amount: 500000,
    transactionType: 'expense',
    date: '2024-03-13T09:15:00Z',
  },
  {
    type: 'PAYMENT',
    name: 'Pago de servicios',
    amount: 75000,
    transactionType: 'expense',
    date: '2024-03-12T14:20:00Z',
  },
];

export const mockSummaryData: SummaryResponseDto = {
  totalBalance: 2500000,
  currentMonthIncome: 1800000,
  incomeChangePercentage: 5.2,
  currentMonthExpense: 1200000,
  expenseChangePercentage: -2.1,
  creditCardSpent: 450000,
  creditCardAvailableBalance: 1550000,
  investmentAmount: 750000,
  investmentChangePercentage: 12.5,
  recentActivity: mockRecentActivity,
};

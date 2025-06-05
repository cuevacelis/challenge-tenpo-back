export declare class RecentActivityDto {
    type: string;
    name: string;
    amount: number;
    transactionType: 'expense' | 'payment';
    date: string;
}
export declare class SummaryResponseDto {
    totalBalance: number;
    currentMonthIncome: number;
    incomeChangePercentage: number;
    currentMonthExpense: number;
    expenseChangePercentage: number;
    creditCardSpent: number;
    creditCardAvailableBalance: number;
    investmentAmount: number;
    investmentChangePercentage: number;
    recentActivity: RecentActivityDto[];
}
export declare class SummaryQueryDto {
    startDate?: string;
    endDate?: string;
    page?: number;
    limit?: number;
}

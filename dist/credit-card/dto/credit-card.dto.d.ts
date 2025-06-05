export declare enum TransactionType {
    FOOD = "FOOD",
    TRANSACTION = "TRANSACTION",
    CARD_PAYMENT = "CARD_PAYMENT",
    DEPOSIT = "DEPOSIT"
}
export declare class TransactionDto {
    id: string;
    description: string;
    amount: number;
    date: string;
    type: TransactionType;
}
export declare class CreditCardTransactionQueryDto {
    search?: string;
    startDate?: string;
    endDate?: string;
    minAmount?: number;
    maxAmount?: number;
}
export declare class CreditCardTransactionDto {
    id: string;
    date: string;
    description: string;
    amount: number;
    status?: string;
    type: TransactionType;
}
export declare class CreditCardInfoDto {
    cardNumber: string;
    totalLimit: number;
    consumedAmount: number;
    amountToPay: number;
    cutOffDate: string;
    paymentDueDate: string;
    transactions: CreditCardTransactionDto[];
}
export declare class PaginationDto {
    page?: number;
    limit?: number;
}
export declare class CreditCardSummaryResponse {
    summary: Omit<CreditCardInfoDto, 'transactions'>;
    transactions: CreditCardTransactionDto[];
    pagination: {
        total: number;
        page: number;
        limit: number;
        totalPages: number;
        hasNextPage: boolean;
        hasPreviousPage: boolean;
    };
}

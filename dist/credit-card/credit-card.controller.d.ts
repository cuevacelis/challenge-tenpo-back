import { CreditCardService } from './credit-card.service';
export declare class CreditCardController {
    private readonly creditCardService;
    constructor(creditCardService: CreditCardService);
    getCreditCardInfo(search?: string, startDate?: string, endDate?: string, minAmount?: number, maxAmount?: number, page?: number, limit?: number): import("./dto/credit-card.dto").CreditCardSummaryResponse;
}

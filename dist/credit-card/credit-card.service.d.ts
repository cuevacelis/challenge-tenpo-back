import { CreditCardTransactionQueryDto, CreditCardSummaryResponse } from './dto/credit-card.dto';
import { PaginationDto } from '../benefit/dto/pagination.dto';
export declare class CreditCardService {
    private creditCardData;
    constructor();
    getCreditCardSummaryAndTransactions(filterDto: CreditCardTransactionQueryDto, pagination?: PaginationDto): CreditCardSummaryResponse;
}

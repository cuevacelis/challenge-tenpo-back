import { SummaryQueryDto, SummaryResponseDto } from './dto/summary.dto';
export declare class SummaryService {
    private summaryData;
    constructor();
    getSummary(queryDto: SummaryQueryDto): SummaryResponseDto;
}

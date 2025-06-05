import { SummaryService } from './summary.service';
import { SummaryQueryDto, SummaryResponseDto } from './dto/summary.dto';
export declare class SummaryController {
    private readonly summaryService;
    constructor(summaryService: SummaryService);
    getSummary(queryDto: SummaryQueryDto): SummaryResponseDto;
}

import { BenefitResponseDto, BenefitCategoriesResponseDto } from './dto/benefit.dto';
import { GetBenefitsQueryDto } from './dto/pagination.dto';
export declare class BenefitService {
    getBenefits(query: GetBenefitsQueryDto): BenefitResponseDto;
    getCategories(): BenefitCategoriesResponseDto;
    private calculateMonthlySavings;
    private getUsedBenefitsCount;
}

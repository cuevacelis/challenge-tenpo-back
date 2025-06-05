import { BenefitService } from './benefit.service';
import { BenefitResponseDto, BenefitCategoriesResponseDto } from './dto/benefit.dto';
import { GetBenefitsQueryDto } from './dto/pagination.dto';
export declare class BenefitController {
    private readonly benefitService;
    constructor(benefitService: BenefitService);
    getBenefits(query: GetBenefitsQueryDto): BenefitResponseDto;
    getCategories(): BenefitCategoriesResponseDto;
}

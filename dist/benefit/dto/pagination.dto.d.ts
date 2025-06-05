import { BenefitType } from './benefit.dto';
export declare class PaginationDto {
    page?: number;
    limit?: number;
}
export declare class GetBenefitsQueryDto extends PaginationDto {
    type?: BenefitType;
}

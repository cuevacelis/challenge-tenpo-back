export declare enum BenefitType {
    ALL = "all",
    RESTAURANTS = "restaurants",
    SHOPPING = "shopping",
    TRANSPORT = "transport",
    ENTERTAINMENT = "entertainment"
}
export declare enum BenefitColor {
    ALL = "#6B7280",
    RESTAURANTS = "#EF4444",
    SHOPPING = "#3B82F6",
    TRANSPORT = "#10B981",
    ENTERTAINMENT = "#8B5CF6"
}
export declare class BenefitCategoryDto {
    id: string;
    name: string;
    displayName: string;
    iconName: string;
    color: BenefitColor;
}
export declare class BenefitCategoriesResponseDto {
    categories: BenefitCategoryDto[];
}
export declare class BenefitItemDto {
    id: string;
    name: string;
    type: BenefitType;
    discount: number;
    description: string;
    validUntil: Date;
    location: string;
    iconName: string;
    color: BenefitColor;
}
export declare class PaginationMetaDto {
    totalPages: number;
    totalItems: number;
    currentPage: number;
    itemsPerPage: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
}
export declare class BenefitResponseDto {
    totalBenefits: number;
    monthlySavings: number;
    usedBenefits: number;
    selectedType: BenefitType;
    benefits: BenefitItemDto[];
    pagination: PaginationMetaDto;
}

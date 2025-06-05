"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BenefitService = void 0;
const common_1 = require("@nestjs/common");
const benefit_dto_1 = require("./dto/benefit.dto");
const mock_benefits_1 = require("./dto/mock-benefits");
let BenefitService = class BenefitService {
    getBenefits(query) {
        const { type = benefit_dto_1.BenefitType.ALL, page = 1, limit = 10 } = query;
        const filteredBenefits = type === benefit_dto_1.BenefitType.ALL
            ? mock_benefits_1.mockBenefits
            : mock_benefits_1.mockBenefits.filter((benefit) => benefit.type === type);
        const totalItems = filteredBenefits.length;
        const totalPages = Math.ceil(totalItems / limit);
        const currentPage = Math.min(page, totalPages || 1);
        const startIndex = (currentPage - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedBenefits = filteredBenefits.slice(startIndex, endIndex);
        const monthlySavings = this.calculateMonthlySavings();
        const usedBenefits = this.getUsedBenefitsCount();
        const paginationMeta = {
            totalPages,
            totalItems,
            currentPage,
            itemsPerPage: limit,
            hasNextPage: currentPage < totalPages,
            hasPreviousPage: currentPage > 1,
        };
        return {
            totalBenefits: mock_benefits_1.mockBenefits.length,
            monthlySavings,
            usedBenefits,
            selectedType: type,
            benefits: paginatedBenefits,
            pagination: paginationMeta,
        };
    }
    getCategories() {
        return {
            categories: mock_benefits_1.mockCategories,
        };
    }
    calculateMonthlySavings() {
        return 1500;
    }
    getUsedBenefitsCount() {
        return 3;
    }
};
exports.BenefitService = BenefitService;
exports.BenefitService = BenefitService = __decorate([
    (0, common_1.Injectable)()
], BenefitService);
//# sourceMappingURL=benefit.service.js.map
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardService = void 0;
const common_1 = require("@nestjs/common");
const mock_credit_card_data_1 = require("./dto/mock-credit-card.data");
let CreditCardService = class CreditCardService {
    creditCardData;
    constructor() {
        this.creditCardData = mock_credit_card_data_1.mockCreditCardData;
    }
    getCreditCardSummaryAndTransactions(filterDto, pagination = { page: 1, limit: 10 }) {
        let filteredTransactions = [...this.creditCardData.transactions];
        if (filterDto.search) {
            const searchTerm = filterDto.search.toLowerCase();
            filteredTransactions = filteredTransactions.filter((t) => t.description.toLowerCase().includes(searchTerm));
        }
        if (filterDto.startDate) {
            const startDate = new Date(filterDto.startDate);
            filteredTransactions = filteredTransactions.filter((t) => new Date(t.date) >= startDate);
        }
        if (filterDto.endDate) {
            const endDate = new Date(filterDto.endDate);
            filteredTransactions = filteredTransactions.filter((t) => new Date(t.date) <= endDate);
        }
        if (filterDto.minAmount) {
            filteredTransactions = filteredTransactions.filter((t) => t.amount >= (filterDto.minAmount ?? 0));
        }
        if (filterDto.maxAmount) {
            filteredTransactions = filteredTransactions.filter((t) => t.amount <= (filterDto.maxAmount ?? 0));
        }
        const totalItems = filteredTransactions.length;
        const totalPages = Math.ceil(totalItems / (pagination.limit ?? 10));
        const currentPage = Math.min(pagination.page ?? 1, totalPages || 1);
        const startIndex = (currentPage - 1) * (pagination.limit ?? 10);
        const endIndex = startIndex + (pagination.limit ?? 10);
        const paginatedTransactions = filteredTransactions.slice(startIndex, endIndex);
        const summary = {
            cardNumber: this.creditCardData.cardNumber,
            totalLimit: this.creditCardData.totalLimit,
            consumedAmount: this.creditCardData.consumedAmount,
            amountToPay: this.creditCardData.amountToPay,
            cutOffDate: this.creditCardData.cutOffDate,
            paymentDueDate: this.creditCardData.paymentDueDate,
        };
        return {
            summary,
            transactions: paginatedTransactions,
            pagination: {
                total: totalItems,
                page: currentPage,
                limit: pagination.limit ?? 10,
                totalPages,
                hasNextPage: currentPage < totalPages,
                hasPreviousPage: currentPage > 1,
            },
        };
    }
};
exports.CreditCardService = CreditCardService;
exports.CreditCardService = CreditCardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], CreditCardService);
//# sourceMappingURL=credit-card.service.js.map
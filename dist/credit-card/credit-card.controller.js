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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const credit_card_service_1 = require("./credit-card.service");
let CreditCardController = class CreditCardController {
    creditCardService;
    constructor(creditCardService) {
        this.creditCardService = creditCardService;
    }
    getCreditCardInfo(search, startDate, endDate, minAmount, maxAmount, page, limit) {
        const filterDto = {
            search,
            startDate,
            endDate,
            minAmount,
            maxAmount,
        };
        const pagination = {
            page: page ?? 1,
            limit: limit ?? 10,
        };
        return this.creditCardService.getCreditCardSummaryAndTransactions(filterDto, pagination);
    }
};
exports.CreditCardController = CreditCardController;
__decorate([
    (0, common_1.Get)('info'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({
        transform: true,
        whitelist: true,
        transformOptions: { enableImplicitConversion: true },
    })),
    (0, swagger_1.ApiOperation)({
        summary: 'Obtener información de la tarjeta de crédito y transacciones',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Información de la tarjeta y transacciones obtenida exitosamente',
    }),
    __param(0, (0, common_1.Query)('search')),
    __param(1, (0, common_1.Query)('startDate')),
    __param(2, (0, common_1.Query)('endDate')),
    __param(3, (0, common_1.Query)('minAmount')),
    __param(4, (0, common_1.Query)('maxAmount')),
    __param(5, (0, common_1.Query)('page')),
    __param(6, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, Number, Number, Number, Number]),
    __metadata("design:returntype", void 0)
], CreditCardController.prototype, "getCreditCardInfo", null);
exports.CreditCardController = CreditCardController = __decorate([
    (0, swagger_1.ApiTags)('credit-card'),
    (0, common_1.Controller)('credit-card'),
    __metadata("design:paramtypes", [credit_card_service_1.CreditCardService])
], CreditCardController);
//# sourceMappingURL=credit-card.controller.js.map
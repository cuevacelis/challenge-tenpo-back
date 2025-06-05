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
exports.CreditCardSummaryResponse = exports.PaginationDto = exports.CreditCardInfoDto = exports.CreditCardTransactionDto = exports.CreditCardTransactionQueryDto = exports.TransactionDto = exports.TransactionType = void 0;
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
const swagger_1 = require("@nestjs/swagger");
var TransactionType;
(function (TransactionType) {
    TransactionType["FOOD"] = "FOOD";
    TransactionType["TRANSACTION"] = "TRANSACTION";
    TransactionType["CARD_PAYMENT"] = "CARD_PAYMENT";
    TransactionType["DEPOSIT"] = "DEPOSIT";
})(TransactionType || (exports.TransactionType = TransactionType = {}));
class TransactionDto {
    id;
    description;
    amount;
    date;
    type;
}
exports.TransactionDto = TransactionDto;
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TransactionDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TransactionDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TransactionDto.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], TransactionDto.prototype, "date", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TransactionDto.prototype, "type", void 0);
class CreditCardTransactionQueryDto {
    search;
    startDate;
    endDate;
    minAmount;
    maxAmount;
}
exports.CreditCardTransactionQueryDto = CreditCardTransactionQueryDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Término de búsqueda para filtrar transacciones',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreditCardTransactionQueryDto.prototype, "search", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha de inicio para filtrar transacciones',
        required: false,
        example: '2024-01-01',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreditCardTransactionQueryDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Fecha de fin para filtrar transacciones',
        required: false,
        example: '2024-12-31',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreditCardTransactionQueryDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Monto mínimo para filtrar transacciones',
        required: false,
        minimum: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreditCardTransactionQueryDto.prototype, "minAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Monto máximo para filtrar transacciones',
        required: false,
        minimum: 0,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreditCardTransactionQueryDto.prototype, "maxAmount", void 0);
class CreditCardTransactionDto {
    id;
    date;
    description;
    amount;
    status;
    type;
}
exports.CreditCardTransactionDto = CreditCardTransactionDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID de la transacción' }),
    __metadata("design:type", String)
], CreditCardTransactionDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de la transacción' }),
    __metadata("design:type", String)
], CreditCardTransactionDto.prototype, "date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Descripción de la transacción' }),
    __metadata("design:type", String)
], CreditCardTransactionDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Monto de la transacción' }),
    __metadata("design:type", Number)
], CreditCardTransactionDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Estado de la transacción', required: false }),
    __metadata("design:type", String)
], CreditCardTransactionDto.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: TransactionType, description: 'Tipo de transacción' }),
    __metadata("design:type", String)
], CreditCardTransactionDto.prototype, "type", void 0);
class CreditCardInfoDto {
    cardNumber;
    totalLimit;
    consumedAmount;
    amountToPay;
    cutOffDate;
    paymentDueDate;
    transactions;
}
exports.CreditCardInfoDto = CreditCardInfoDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Número de tarjeta' }),
    __metadata("design:type", String)
], CreditCardInfoDto.prototype, "cardNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Límite total de la tarjeta' }),
    __metadata("design:type", Number)
], CreditCardInfoDto.prototype, "totalLimit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Monto consumido' }),
    __metadata("design:type", Number)
], CreditCardInfoDto.prototype, "consumedAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Monto a pagar' }),
    __metadata("design:type", Number)
], CreditCardInfoDto.prototype, "amountToPay", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de corte' }),
    __metadata("design:type", String)
], CreditCardInfoDto.prototype, "cutOffDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de pago' }),
    __metadata("design:type", String)
], CreditCardInfoDto.prototype, "paymentDueDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [CreditCardTransactionDto] }),
    __metadata("design:type", Array)
], CreditCardInfoDto.prototype, "transactions", void 0);
class PaginationDto {
    page = 1;
    limit = 10;
}
exports.PaginationDto = PaginationDto;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], PaginationDto.prototype, "page", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], PaginationDto.prototype, "limit", void 0);
class CreditCardSummaryResponse {
    summary;
    transactions;
    pagination;
}
exports.CreditCardSummaryResponse = CreditCardSummaryResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ type: CreditCardInfoDto }),
    __metadata("design:type", Object)
], CreditCardSummaryResponse.prototype, "summary", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [CreditCardTransactionDto] }),
    __metadata("design:type", Array)
], CreditCardSummaryResponse.prototype, "transactions", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Información de paginación',
        type: 'object',
        properties: {
            total: { type: 'number', description: 'Total de transacciones' },
            page: { type: 'number', description: 'Página actual' },
            limit: { type: 'number', description: 'Elementos por página' },
            totalPages: { type: 'number', description: 'Total de páginas' },
            hasNextPage: {
                type: 'boolean',
                description: '¿Existe página siguiente?',
            },
            hasPreviousPage: {
                type: 'boolean',
                description: '¿Existe página anterior?',
            },
        },
    }),
    __metadata("design:type", Object)
], CreditCardSummaryResponse.prototype, "pagination", void 0);
//# sourceMappingURL=credit-card.dto.js.map
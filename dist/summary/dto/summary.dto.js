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
exports.SummaryQueryDto = exports.SummaryResponseDto = exports.RecentActivityDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class RecentActivityDto {
    type;
    name;
    amount;
    transactionType;
    date;
}
exports.RecentActivityDto = RecentActivityDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tipo de actividad' }),
    __metadata("design:type", String)
], RecentActivityDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre de la actividad' }),
    __metadata("design:type", String)
], RecentActivityDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Monto de la transacción' }),
    __metadata("design:type", Number)
], RecentActivityDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Tipo de transacción (gasto/pago)' }),
    __metadata("design:type", String)
], RecentActivityDto.prototype, "transactionType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de la transacción en UTC' }),
    __metadata("design:type", String)
], RecentActivityDto.prototype, "date", void 0);
class SummaryResponseDto {
    totalBalance;
    currentMonthIncome;
    incomeChangePercentage;
    currentMonthExpense;
    expenseChangePercentage;
    creditCardSpent;
    creditCardAvailableBalance;
    investmentAmount;
    investmentChangePercentage;
    recentActivity;
}
exports.SummaryResponseDto = SummaryResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Saldo total disponible' }),
    __metadata("design:type", Number)
], SummaryResponseDto.prototype, "totalBalance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Ingreso del mes actual' }),
    __metadata("design:type", Number)
], SummaryResponseDto.prototype, "currentMonthIncome", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Porcentaje de cambio en ingresos comparado con el mes anterior',
    }),
    __metadata("design:type", Number)
], SummaryResponseDto.prototype, "incomeChangePercentage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Gasto del mes actual' }),
    __metadata("design:type", Number)
], SummaryResponseDto.prototype, "currentMonthExpense", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Porcentaje de cambio en gastos comparado con el mes anterior',
    }),
    __metadata("design:type", Number)
], SummaryResponseDto.prototype, "expenseChangePercentage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Gasto total en tarjeta de crédito' }),
    __metadata("design:type", Number)
], SummaryResponseDto.prototype, "creditCardSpent", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Saldo disponible en tarjeta de crédito' }),
    __metadata("design:type", Number)
], SummaryResponseDto.prototype, "creditCardAvailableBalance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Gasto en inversiones' }),
    __metadata("design:type", Number)
], SummaryResponseDto.prototype, "investmentAmount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Porcentaje de cambio en inversiones comparado con el mes anterior',
    }),
    __metadata("design:type", Number)
], SummaryResponseDto.prototype, "investmentChangePercentage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: [RecentActivityDto], description: 'Actividad reciente' }),
    __metadata("design:type", Array)
], SummaryResponseDto.prototype, "recentActivity", void 0);
class SummaryQueryDto {
    startDate;
    endDate;
    page;
    limit;
}
exports.SummaryQueryDto = SummaryQueryDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Fecha de inicio para filtrar actividades',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], SummaryQueryDto.prototype, "startDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Fecha de fin para filtrar actividades',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], SummaryQueryDto.prototype, "endDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ required: false, description: 'Número de página' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], SummaryQueryDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        required: false,
        description: 'Límite de registros por página',
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => Number),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], SummaryQueryDto.prototype, "limit", void 0);
//# sourceMappingURL=summary.dto.js.map
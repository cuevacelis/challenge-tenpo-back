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
exports.BenefitController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const benefit_service_1 = require("./benefit.service");
const benefit_dto_1 = require("./dto/benefit.dto");
const pagination_dto_1 = require("./dto/pagination.dto");
let BenefitController = class BenefitController {
    benefitService;
    constructor(benefitService) {
        this.benefitService = benefitService;
    }
    getBenefits(query) {
        return this.benefitService.getBenefits(query);
    }
    getCategories() {
        return this.benefitService.getCategories();
    }
};
exports.BenefitController = BenefitController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de beneficios paginada' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de beneficios obtenida exitosamente',
        type: benefit_dto_1.BenefitResponseDto,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_dto_1.GetBenefitsQueryDto]),
    __metadata("design:returntype", benefit_dto_1.BenefitResponseDto)
], BenefitController.prototype, "getBenefits", null);
__decorate([
    (0, common_1.Get)('categories'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener lista de categorías disponibles' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Lista de categorías obtenida exitosamente',
        type: benefit_dto_1.BenefitCategoriesResponseDto,
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", benefit_dto_1.BenefitCategoriesResponseDto)
], BenefitController.prototype, "getCategories", null);
exports.BenefitController = BenefitController = __decorate([
    (0, swagger_1.ApiTags)('benefits'),
    (0, common_1.Controller)('benefits'),
    __metadata("design:paramtypes", [benefit_service_1.BenefitService])
], BenefitController);
//# sourceMappingURL=benefit.controller.js.map
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
exports.BenefitResponseDto = exports.PaginationMetaDto = exports.BenefitItemDto = exports.BenefitCategoriesResponseDto = exports.BenefitCategoryDto = exports.BenefitColor = exports.BenefitType = void 0;
const swagger_1 = require("@nestjs/swagger");
var BenefitType;
(function (BenefitType) {
    BenefitType["ALL"] = "all";
    BenefitType["RESTAURANTS"] = "restaurants";
    BenefitType["SHOPPING"] = "shopping";
    BenefitType["TRANSPORT"] = "transport";
    BenefitType["ENTERTAINMENT"] = "entertainment";
})(BenefitType || (exports.BenefitType = BenefitType = {}));
var BenefitColor;
(function (BenefitColor) {
    BenefitColor["ALL"] = "#6B7280";
    BenefitColor["RESTAURANTS"] = "#EF4444";
    BenefitColor["SHOPPING"] = "#3B82F6";
    BenefitColor["TRANSPORT"] = "#10B981";
    BenefitColor["ENTERTAINMENT"] = "#8B5CF6";
})(BenefitColor || (exports.BenefitColor = BenefitColor = {}));
class BenefitCategoryDto {
    id;
    name;
    displayName;
    iconName;
    color;
}
exports.BenefitCategoryDto = BenefitCategoryDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID único de la categoría' }),
    __metadata("design:type", String)
], BenefitCategoryDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre técnico de la categoría' }),
    __metadata("design:type", String)
], BenefitCategoryDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre para mostrar en la UI' }),
    __metadata("design:type", String)
], BenefitCategoryDto.prototype, "displayName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre del icono de Lucide React' }),
    __metadata("design:type", String)
], BenefitCategoryDto.prototype, "iconName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: BenefitColor,
        description: 'Color hexadecimal para el icono y elementos UI',
        example: '#EF4444',
    }),
    __metadata("design:type", String)
], BenefitCategoryDto.prototype, "color", void 0);
class BenefitCategoriesResponseDto {
    categories;
}
exports.BenefitCategoriesResponseDto = BenefitCategoriesResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [BenefitCategoryDto],
        description: 'Lista de categorías disponibles',
    }),
    __metadata("design:type", Array)
], BenefitCategoriesResponseDto.prototype, "categories", void 0);
class BenefitItemDto {
    id;
    name;
    type;
    discount;
    description;
    validUntil;
    location;
    iconName;
    color;
}
exports.BenefitItemDto = BenefitItemDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'ID único del beneficio' }),
    __metadata("design:type", String)
], BenefitItemDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre del beneficio' }),
    __metadata("design:type", String)
], BenefitItemDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: BenefitType, description: 'Tipo de beneficio' }),
    __metadata("design:type", String)
], BenefitItemDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Porcentaje de descuento' }),
    __metadata("design:type", Number)
], BenefitItemDto.prototype, "discount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Descripción breve del beneficio' }),
    __metadata("design:type", String)
], BenefitItemDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Fecha de validez del beneficio' }),
    __metadata("design:type", Date)
], BenefitItemDto.prototype, "validUntil", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Ubicación del beneficio' }),
    __metadata("design:type", String)
], BenefitItemDto.prototype, "location", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre del icono de Lucide React' }),
    __metadata("design:type", String)
], BenefitItemDto.prototype, "iconName", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: BenefitColor,
        description: 'Color hexadecimal para el icono y elementos UI',
        example: '#EF4444',
    }),
    __metadata("design:type", String)
], BenefitItemDto.prototype, "color", void 0);
class PaginationMetaDto {
    totalPages;
    totalItems;
    currentPage;
    itemsPerPage;
    hasNextPage;
    hasPreviousPage;
}
exports.PaginationMetaDto = PaginationMetaDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Número total de páginas' }),
    __metadata("design:type", Number)
], PaginationMetaDto.prototype, "totalPages", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Número total de elementos' }),
    __metadata("design:type", Number)
], PaginationMetaDto.prototype, "totalItems", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Página actual' }),
    __metadata("design:type", Number)
], PaginationMetaDto.prototype, "currentPage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Elementos por página' }),
    __metadata("design:type", Number)
], PaginationMetaDto.prototype, "itemsPerPage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '¿Existe página siguiente?' }),
    __metadata("design:type", Boolean)
], PaginationMetaDto.prototype, "hasNextPage", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: '¿Existe página anterior?' }),
    __metadata("design:type", Boolean)
], PaginationMetaDto.prototype, "hasPreviousPage", void 0);
class BenefitResponseDto {
    totalBenefits;
    monthlySavings;
    usedBenefits;
    selectedType;
    benefits;
    pagination;
}
exports.BenefitResponseDto = BenefitResponseDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Total de beneficios disponibles' }),
    __metadata("design:type", Number)
], BenefitResponseDto.prototype, "totalBenefits", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Ahorro total del mes actual' }),
    __metadata("design:type", Number)
], BenefitResponseDto.prototype, "monthlySavings", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Número de beneficios utilizados' }),
    __metadata("design:type", Number)
], BenefitResponseDto.prototype, "usedBenefits", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        enum: BenefitType,
        description: 'Tipo de beneficio seleccionado',
    }),
    __metadata("design:type", String)
], BenefitResponseDto.prototype, "selectedType", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: [BenefitItemDto],
        description: 'Lista de beneficios disponibles',
    }),
    __metadata("design:type", Array)
], BenefitResponseDto.prototype, "benefits", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        type: PaginationMetaDto,
        description: 'Información de paginación',
    }),
    __metadata("design:type", PaginationMetaDto)
], BenefitResponseDto.prototype, "pagination", void 0);
//# sourceMappingURL=benefit.dto.js.map
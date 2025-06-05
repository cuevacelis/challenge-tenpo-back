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
exports.SummaryController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const summary_service_1 = require("./summary.service");
const summary_dto_1 = require("./dto/summary.dto");
let SummaryController = class SummaryController {
    summaryService;
    constructor(summaryService) {
        this.summaryService = summaryService;
    }
    getSummary(queryDto) {
        return this.summaryService.getSummary(queryDto);
    }
};
exports.SummaryController = SummaryController;
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ transform: true, whitelist: true })),
    (0, swagger_1.ApiOperation)({ summary: 'Obtener resumen financiero' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Resumen financiero obtenido exitosamente',
        type: summary_dto_1.SummaryResponseDto,
    }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [summary_dto_1.SummaryQueryDto]),
    __metadata("design:returntype", summary_dto_1.SummaryResponseDto)
], SummaryController.prototype, "getSummary", null);
exports.SummaryController = SummaryController = __decorate([
    (0, swagger_1.ApiTags)('summary'),
    (0, common_1.Controller)('summary'),
    __metadata("design:paramtypes", [summary_service_1.SummaryService])
], SummaryController);
//# sourceMappingURL=summary.controller.js.map
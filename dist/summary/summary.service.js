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
exports.SummaryService = void 0;
const common_1 = require("@nestjs/common");
const mock_summary_data_1 = require("./dto/mock-summary.data");
let SummaryService = class SummaryService {
    summaryData;
    constructor() {
        this.summaryData = mock_summary_data_1.mockSummaryData;
    }
    getSummary(queryDto) {
        let filteredActivity = [...this.summaryData.recentActivity];
        if (queryDto.startDate) {
            const startDate = new Date(queryDto.startDate);
            filteredActivity = filteredActivity.filter((activity) => new Date(activity.date) >= startDate);
        }
        if (queryDto.endDate) {
            const endDate = new Date(queryDto.endDate);
            filteredActivity = filteredActivity.filter((activity) => new Date(activity.date) <= endDate);
        }
        const page = queryDto.page || 1;
        const limit = queryDto.limit || 10;
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const paginatedActivity = filteredActivity.slice(startIndex, endIndex);
        return {
            ...this.summaryData,
            recentActivity: paginatedActivity,
        };
    }
};
exports.SummaryService = SummaryService;
exports.SummaryService = SummaryService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], SummaryService);
//# sourceMappingURL=summary.service.js.map
import { Injectable } from '@nestjs/common';
import { SummaryQueryDto, SummaryResponseDto } from './dto/summary.dto';
import { mockSummaryData } from './dto/mock-summary.data';

@Injectable()
export class SummaryService {
  private summaryData: SummaryResponseDto;

  constructor() {
    this.summaryData = mockSummaryData;
  }

  getSummary(queryDto: SummaryQueryDto): SummaryResponseDto {
    let filteredActivity = [...this.summaryData.recentActivity];

    // Aplicar filtros de fecha
    if (queryDto.startDate) {
      const startDate = new Date(queryDto.startDate);
      filteredActivity = filteredActivity.filter(
        (activity) => new Date(activity.date) >= startDate,
      );
    }

    if (queryDto.endDate) {
      const endDate = new Date(queryDto.endDate);
      filteredActivity = filteredActivity.filter(
        (activity) => new Date(activity.date) <= endDate,
      );
    }

    // Paginación
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
}

import {
  Controller,
  Get,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SummaryService } from './summary.service';
import { SummaryQueryDto, SummaryResponseDto } from './dto/summary.dto';

@ApiTags('summary')
@Controller('summary')
export class SummaryController {
  constructor(private readonly summaryService: SummaryService) {}

  @Get()
  @UsePipes(new ValidationPipe({ transform: true, whitelist: true }))
  @ApiOperation({ summary: 'Obtener resumen financiero' })
  @ApiResponse({
    status: 200,
    description: 'Resumen financiero obtenido exitosamente',
    type: SummaryResponseDto,
  })
  getSummary(@Query() queryDto: SummaryQueryDto): SummaryResponseDto {
    return this.summaryService.getSummary(queryDto);
  }
}

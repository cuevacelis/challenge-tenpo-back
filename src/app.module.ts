import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CreditCardModule } from './credit-card/credit-card.module';
import { SummaryModule } from './summary/summary.module';
import { BenefitModule } from './benefit/benefit.module';

@Module({
  imports: [CreditCardModule, SummaryModule, BenefitModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

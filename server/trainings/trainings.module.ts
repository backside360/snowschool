import { Module } from '@nestjs/common';

import { TrainingController } from './trainings.controller';
import { DataService } from './data.service';
import { TrainingService } from './trainings.service';

@Module({
  controllers: [TrainingController],
  providers: [DataService, TrainingService],
})
export class TrainingModule {}

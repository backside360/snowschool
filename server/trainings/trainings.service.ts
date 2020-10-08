import { Injectable } from '@nestjs/common';
import { getManager, getRepository } from 'typeorm';
import { TrainingsEntity } from './trainings.entity';

@Injectable()
export class TrainingService {
  create(train) {
    console.log(train);

    const manager = getManager();
    const repository = getRepository(TrainingsEntity);

    const training = manager.create(TrainingsEntity, train);
    repository.save(training);
  }
}

import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { TrainingsEntity } from './trainings.entity';

@Injectable()
export class TrainingService {
  async create(train) {
    const repository = getRepository(TrainingsEntity);

    const training = repository.create(train);
    return await repository.insert(training);
  }
  async getAll() {
    const repository = getRepository(TrainingsEntity);
    return await repository.find();
  }
  async get(type: string) {
    const repository = getRepository(TrainingsEntity);
    return await repository.find({ type: type });
  }
  async getByDate(date) {
    const repository = getRepository(TrainingsEntity);
    return await repository.find({ date: date });
  }
}

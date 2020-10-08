import { Controller, Get, Post, Body } from '@nestjs/common';
import { DataService } from './data.service';
import { TrainingService } from './trainings.service';

@Controller('trainings')
export class TrainingController {
  constructor(
    private readonly dataService: DataService,
    private readonly trainingsService: TrainingService,
  ) {}

  @Get()
  getTraining() {
    return this.dataService.fullPlace;
  }
  @Post()
  createTraining(
    @Body('place') place: string,
    @Body('time') time: string,
    @Body('date') date: any,
    @Body('name') name: string,
    @Body('type') type: string,
    @Body('coach') coach: string,
  ) {
    this.trainingsService.create({
      type: type,
      place: place,
      time: time,
      date: date,
      name: name,
      coach: coach,
    });
    return 'Success';
  }
}

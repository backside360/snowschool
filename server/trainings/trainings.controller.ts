import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { DataService } from './data.service';
import { TrainingService } from './trainings.service';

@Controller('trainings')
export class TrainingController {
  constructor(
    private readonly dataService: DataService,
    private readonly trainingsService: TrainingService,
  ) {}

  @Get()
  async getTrainings() {
    try {
      return await this.trainingsService.getAll();
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  @Get('schedule')
  async getTraining(@Query('type') type: string) {
    try {
      return await this.trainingsService.get(type);
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  @Get('date')
  async getTrainingByDate(@Query('date') date: string) {
    try {
      return await this.trainingsService.getByDate(date);
    } catch (err) {
      console.log(err);
      return err;
    }
  }

  @Get('places')
  getPlaces() {
    return this.dataService.fullPlace;
  }

  @Post()
  async createTraining(
    @Body('place') place: string,
    @Body('time') time: string,
    @Body('date') date: any,
    @Body('name') name: string,
    @Body('type') type: string,
    @Body('coach') coach: string,
  ) {
    try {
      await this.trainingsService.create({
        type: type,
        place: place,
        time: time,
        date: date,
        name: name,
        coach: coach,
      });
      return 'Success';
    } catch (err) {
      console.log(err);
      return err;
    }
  }
}

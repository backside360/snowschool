import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TrainingModule } from './trainings/trainings.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'postgres',
      password: 'дфдфдф',
      database: 'training',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TrainingModule,
  ],
})
export class AppModule {}

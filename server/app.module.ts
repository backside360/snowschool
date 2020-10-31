import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { TrainingModule } from './trainings/trainings.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '0.0.0.0',
      port: 5432,
      username: 'postgres',
      password: 'дфдфдф',
      database: 'training',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TrainingModule,
    AuthModule
  ],
})
export class AppModule {}

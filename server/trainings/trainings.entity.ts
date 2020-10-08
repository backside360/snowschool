import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('trainings')
export class TrainingsEntity {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column({ type: 'varchar', length: 100, nullable: true })
  type: string;
  @Column({ type: 'varchar', length: 100, nullable: false })
  place: string;
  @Column({ type: 'varchar', nullable: true })
  date: string;
  @Column({ type: 'varchar', nullable: true })
  time: string;
  @Column('simple-array', { nullable: true })
  name: string[];
  @Column({ type: 'varchar', length: 100, nullable: false })
  coach: string;
}

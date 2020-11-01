import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('auth')
export class AuthEntity {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column({ type: 'varchar' })
  login: string;
  @Column({ type: 'varchar' })
  token: string;
}

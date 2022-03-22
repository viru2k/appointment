import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AppointmentStatusEnums } from '../enums/AppointmentStatusEnums';

@Entity()
export class AppointmentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  description: string;
  @Column()
  status: AppointmentStatusEnums;
}

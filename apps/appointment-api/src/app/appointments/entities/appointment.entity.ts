import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AppointmentStatusEnums } from '../enums/AppointmentStatusEnums';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  description: string;
  @Column({
    type: 'enum',
    enum: AppointmentStatusEnums,
    default: 'PENDING',
  })
  status: AppointmentStatusEnums;
}

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../auth/entities/user.entity';
import { AppointmentStatusEnums } from '../enums/appointment-status-enums';

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
  @ManyToOne((type) => User, (user) => user.appointments, { eager: false })
  user: User;
}

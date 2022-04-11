import { Exclude } from 'class-transformer';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../auth/entities/user.entity';
import { AppointmentStatusEnums } from '../enums/appointment-status-enums';

@Entity()
export class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  description: string;
  @Column()
  number: number;
  @Column()
  ticket: string;
  @Column({
    type: 'enum',
    enum: AppointmentStatusEnums,
    default: 'PENDING',
  })
  status: AppointmentStatusEnums;
  @ManyToOne((_type) => User, (user) => user.appointments, { eager: false })
  @Exclude({ toPlainOnly: true }) //  remove user in this case for not to be shown at response
  user: User;
}

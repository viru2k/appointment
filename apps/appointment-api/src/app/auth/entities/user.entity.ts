import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RoleEnums } from '../enums/role-enums';
import { Appointment } from '../../appointments/entities/appointment.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  username: string;
  @Column()
  password: string;
  @Column({ unique: true })
  email: string;
  @Column({
    type: 'enum',
    enum: RoleEnums,
    default: 'ADMIN',
  })
  role: RoleEnums;

  @OneToMany((type) => Appointment, (appointment) => appointment.user, {
    eager: true,
  })
  appointments: Appointment[];
}

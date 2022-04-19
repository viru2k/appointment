import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';
import { RoleEnums } from '../enums/role-enums';
import { Appointment } from '../../appointments/entities/appointment.entity';
import { PointOfAttention } from '../../settings/pointofattention/entities/pointofattention.entity';
import { Exclude } from 'class-transformer';
import { Profile } from '../../settings/profile/entities/profile.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  username: string;
  @Column()
  /*   @Exclude({ toPlainOnly: true })
  @Column({ select: false }) */
  password: string;
  @Column({ unique: true })
  email: string;
  @Column({
    type: 'enum',
    enum: RoleEnums,
    default: 'ADMIN',
  })
  role: RoleEnums;

  @OneToMany((_type) => Appointment, (appointment) => appointment.user, {
    eager: true,
  })
  appointments: Appointment[];

  @OneToMany(
    (_type) => PointOfAttention,
    (pointOfAttention) => pointOfAttention.user,
    {
      eager: true,
    }
  )
  pointOfAttention: PointOfAttention[];
  /* 
    @OneToOne(() => Profile)
  @JoinColumn()
  profile: Profile; */

  @OneToOne(() => Profile, (profile) => profile.user)
  @JoinColumn()
  profile: Relation<Profile>;
}

// typeOrm
import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  Relation,
} from 'typeorm';

// Entity
import { User } from '../../../auth/entities/user.entity';
import { ManyToOne, OneToMany } from 'typeorm';
import { Expose } from 'class-transformer';
import { Module } from '../../modules/entities/module.entity';

@Entity()
export class Profile {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ default: false })
  sendNotification: boolean;

  @OneToMany((_type) => Module, (module) => module.profile, {
    eager: true,
  })
  module: Module[];

  @OneToOne(() => User, (user) => user.profile)
  user: Relation<User>;
}

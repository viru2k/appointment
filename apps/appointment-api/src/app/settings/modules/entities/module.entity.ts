// typeOrm
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToOne,
} from 'typeorm';

// Entity
import { Profile } from '../../profile/entities/profile.entity';

import { ModulePermissionEnum } from './../../modules/enums/module-enum';
import { Expose } from 'class-transformer';

@Entity()
export class Module {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: ModulePermissionEnum,
    default: 'ONLY_APPOINTS',
  })
  moduleName: ModulePermissionEnum;

  @ManyToOne((_type) => Profile, (profile) => profile.module, { eager: false })
  @Expose({ toPlainOnly: true })
  profile: Profile;
}

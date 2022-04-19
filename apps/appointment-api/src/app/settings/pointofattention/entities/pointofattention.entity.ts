// typeOrm
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

// transformation
import { Exclude, Expose } from 'class-transformer';

// Enums
import {
  PointOfAttentionType,
  CallPriorityType,
} from '../enums/pointofattention-enums';

// Entity
import { User } from './../../../auth/entities/user.entity';
import { Sector } from '../../sector/entities/sector.entity';

@Entity()
export class PointOfAttention {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  pointName: string;
  @Column()
  pointNumber: number;
  @Column()
  pointLetter: string;
  @Column({
    type: 'enum',
    enum: PointOfAttentionType,
    default: 'ALL',
  })
  pointOfAttentionType: PointOfAttentionType;
  @Column({
    type: 'enum',
    enum: CallPriorityType,
    default: 'MIXED',
  })
  callPriorityType: CallPriorityType;

  @ManyToOne((_type) => User, (user) => user.pointOfAttention, { eager: false })
  @Expose({ toPlainOnly: true })
  user: User;
  @ManyToOne((_type) => Sector, (sector) => sector.pointOfAttention, {
    eager: false,
  })
  @Expose({ toPlainOnly: false })
  sector: Sector;
}

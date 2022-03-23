import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { RoleEnums } from '../enums/role-enums';

@Entity()
export class Auth {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  description: string;
  @Column({
    type: 'enum',
    enum: RoleEnums,
    default: 'ADMIN',
  })
  role: RoleEnums;
}

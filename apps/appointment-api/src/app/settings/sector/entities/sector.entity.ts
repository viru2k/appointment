// typeOrm
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

// Entity
import { PointOfAttention } from '../../pointofattention/entities/pointofattention.entity';

@Entity()
export class Sector {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  sectorName: string;

  @Column()
  sectorLetter: string;

  @Column()
  isPrioritySector: boolean;

  @OneToMany(
    (type) => PointOfAttention,
    (pointOfAttention) => pointOfAttention.sector,
    {
      eager: true,
    }
  )
  pointOfAttention: PointOfAttention[];
}

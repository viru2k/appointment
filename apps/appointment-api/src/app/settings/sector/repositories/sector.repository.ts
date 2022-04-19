//TypeOrm
import { EntityRepository, Repository } from 'typeorm';

// Entity
import { User } from '../../../auth/entities/user.entity';
import { Sector } from '../entities/sector.entity';

// DTO
import { FilterSector } from '../dto/filter-sector.dto';
import { NewSector } from '../dto/new-sector.dto';
import { CurrentSector } from '../dto/current-sector.dto';

@EntityRepository(Sector)
export class SectorRepository extends Repository<CurrentSector> {
  async getAllSector(
    filter: FilterSector,
    user: User
  ): Promise<CurrentSector[]> {
    const { sectorName, sectorLetter, search } = filter;
    const query = this.createQueryBuilder('sector');

    query.where({ user });

    if (sectorName) {
      query.andWhere('sector.sectorName = :sectorName', { sectorName });
    }
    if (sectorLetter) {
      query.andWhere('sector.sectorLetter = :sectorLetter', { sectorLetter });
    }

    if (search) {
      query.andWhere(
        '(LOWER(sector.sectorName) OR LOWER(sector.sectorLetter) )  LIKE :search',
        {
          search: `%${search}%`,
        }
      );
    }
    const sector = await query.getMany();
    return sector;
  }

  async setSector(newSector: NewSector): Promise<CurrentSector> {
    console.log(newSector);
    const { sectorName, sectorLetter, isPrioritySector } = newSector;
    const newSectorElement = this.create({
      sectorName,
      sectorLetter,
      isPrioritySector,
    });
    await this.save(newSectorElement);
    return newSectorElement;
  }
  /* 
  async putSector(putCurrentSector: Sector): Promise<Sector> {
    const updatePointOfAttentionElement: Sector = putCurrentSector;
    await this.save(updatePointOfAttentionElement);
    return updatePointOfAttentionElement;
  } */
}

//Nest
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

// Entity
import { Sector } from './entities/sector.entity';
import { User } from '../../auth/entities/user.entity';

// Repository
import { SectorRepository } from './repositories/sector.repository';

// DTO

import { FilterSector } from './dto/filter-sector.dto';
import { CurrentSector } from './dto/current-sector.dto';
import { NewSector } from './dto/new-sector.dto';

@Injectable()
export class SectorService {
  constructor(
    @InjectRepository(SectorRepository)
    private sectorRepository: SectorRepository
  ) {}

  async getAllSector(
    filter: FilterSector,
    user: User
  ): Promise<CurrentSector[]> {
    const sector = this.sectorRepository.getAllSector(filter, user);
    return sector;
  }

  async getSectorById(id: string, user: User): Promise<CurrentSector> {
    const sector = await this.sectorRepository.findOne({
      where: { id, user },
    });
    if (!sector) {
      throw new NotFoundException('Sector not found');
    }
    return sector;
  }

  async newSector(
    createPointOfAttentionDto: NewSector
  ): Promise<CurrentSector> {
    return this.sectorRepository.setSector(createPointOfAttentionDto);
  }
  /* 
  async putSector(
    id: string,
    currentSector: Sector,
    user: User
  ): Promise<CurrentSector> {
    const appintment = await this.getSectorById(id, user);
    return this.sectorRepository.putSector(currentSector);
  } */
}

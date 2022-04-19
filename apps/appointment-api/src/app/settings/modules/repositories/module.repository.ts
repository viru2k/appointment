//TypeOrm
import { EntityRepository, Repository } from 'typeorm';

// Entity
import { Profile } from '../../profile/entities/profile.entity';
import { Module } from '../entities/module.entity';

// DTO

import { CurrentModule } from '../dto/current-module.dto';

@EntityRepository(Module)
export class ModuleRepository extends Repository<CurrentModule> {
  async getAllModule(profile: Profile): Promise<CurrentModule[]> {
    const query = this.createQueryBuilder('module');

    query.where({ profile });

    const module = await query.getMany();
    return module;
  }
}

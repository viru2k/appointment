//Nest
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

// Repository
import { ModuleRepository } from './repositories/module.repository';

// DTO

import { CurrentModule } from './dto/current-module.dto';

import { Profile } from '../profile/entities/profile.entity';

@Injectable()
export class ModuleService {
  constructor(
    @InjectRepository(ModuleRepository)
    private moduleRepository: ModuleRepository
  ) {}

  async getAllModule(profile: Profile): Promise<CurrentModule[]> {
    const module = this.moduleRepository.getAllModule(profile);
    return module;
  }
}

//Nest
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

// Entity
import { Profile } from './entities/profile.entity';
import { User } from '../../auth/entities/user.entity';

// Repository
import { ProfileRepository } from './repositories/profile.repository';

// DTO

import { FilterProfile } from './dto/filter-profile.dto';
import { CurrentProfile } from './dto/current-profile.dto';
import { NewProfile } from './dto/new-profile.dto';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(ProfileRepository)
    private profileRepository: ProfileRepository
  ) {}

  async getAllProfile(
    filter: FilterProfile,
    user: User
  ): Promise<CurrentProfile[]> {
    const profile = this.profileRepository.getAllProfile(filter, user);
    return profile;
  }

  async getProfileById(id: string, user: User): Promise<CurrentProfile> {
    const profile = await this.profileRepository.findOne({
      where: { id, user },
    });
    if (!profile) {
      throw new NotFoundException('Profile not found');
    }
    return profile;
  }

  async newProfile(
    createPointOfAttentionDto: NewProfile
  ): Promise<CurrentProfile> {
    return this.profileRepository.setProfile(createPointOfAttentionDto);
  }

  async putProfile(
    id: string,
    currentProfile: CurrentProfile,
    user: User
  ): Promise<CurrentProfile> {
    const appintment = await this.getProfileById(id, user);
    return this.profileRepository.putProfile(currentProfile);
  }
}

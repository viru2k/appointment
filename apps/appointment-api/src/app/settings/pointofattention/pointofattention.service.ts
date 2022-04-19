//Nest
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

// Entity
import { PointOfAttention } from './entities/pointofattention.entity';

// Repository
import { PointOfAttentionRepository } from './repositories/pointofattention.repository';

// DTO

import { CurrentPointOfAttention } from './dto/current-pointofattention.dto';
import { FilterPointOfAttention } from './dto/filter-pointofattention.dto';
import { User } from './../../auth/entities/user.entity';
import { NewPointOfAttention } from './dto/new-pointofattention.dto';

@Injectable()
export class PointOfAttentionService {
  constructor(
    @InjectRepository(PointOfAttentionRepository)
    private pointOfAttentionRepository: PointOfAttentionRepository
  ) {}

  async getAllPointOfAttention(
    filter: FilterPointOfAttention,
    user: User
  ): Promise<CurrentPointOfAttention[]> {
    const pointOfAttention =
      this.pointOfAttentionRepository.getAllPointOfAttention(filter, user);

    return pointOfAttention;
  }

  async getpointOfAttentionById(
    id: string,
    user: User
  ): Promise<CurrentPointOfAttention> {
    const pointOfAttention = await this.pointOfAttentionRepository.findOne({
      where: { id, user },
    });
    if (!pointOfAttention) {
      throw new NotFoundException('PointOfAttention not found');
    }
    return pointOfAttention;
  }

  getPointOfAttentionByPOS(id: string): CurrentPointOfAttention {
    return null;
  }

  async newPointOfAttention(
    createPointOfAttentionDto: NewPointOfAttention
  ): Promise<PointOfAttention> {
    return this.pointOfAttentionRepository.setPointOfAttention(
      createPointOfAttentionDto
    );
  }

  async putPointOfAttention(
    id: string,
    currentPointOfAttention: CurrentPointOfAttention,
    user: User
  ): Promise<PointOfAttention> {
    const appintment = await this.getpointOfAttentionById(id, user);
    return this.pointOfAttentionRepository.putPointOfAttention(
      currentPointOfAttention
    );
  }
}

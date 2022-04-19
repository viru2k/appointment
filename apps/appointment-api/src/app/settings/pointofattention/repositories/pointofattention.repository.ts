//TypeOrm
import { EntityRepository, Repository } from 'typeorm';

// Entity
import { User } from './../../../auth/entities/user.entity';
import { PointOfAttention } from '../entities/pointofattention.entity';

// DTO
import { FilterPointOfAttention } from '../dto/filter-pointofattention.dto';
import { NewPointOfAttention } from '../dto/new-pointofattention.dto';
import { CurrentPointOfAttention } from '../dto/current-pointofattention.dto';

@EntityRepository(PointOfAttention)
export class PointOfAttentionRepository extends Repository<PointOfAttention> {
  async getAllPointOfAttention(
    filter: FilterPointOfAttention,
    user: User
  ): Promise<CurrentPointOfAttention[]> {
    const { pointName, pointOfAttentionType, callPriorityType, search } =
      filter;
    const query = this.createQueryBuilder('pointOfAttention')
      .leftJoinAndSelect('pointOfAttention.user', 'user')
      .leftJoinAndSelect('pointOfAttention.sector', 'sector');

    query.where({ user });

    if (pointName) {
      query.andWhere('pointOfAttention.pointName = :pointName', { pointName });
    }
    if (pointOfAttentionType) {
      query.andWhere(
        'pointOfAttention.pointOfAttentionType = :pointOfAttentionType',
        { pointOfAttentionType }
      );
    }
    if (callPriorityType) {
      query.andWhere('pointOfAttention.callPriorityType = :callPriorityType', {
        callPriorityType,
      });
    }
    if (search) {
      query.andWhere(
        '(LOWER(pointOfAttention.pointName) OR LOWER(pointOfAttention.pointOfAttentionType) OR LOWER(pointOfAttention.callPriorityType) )  LIKE :search',
        {
          search: `%${search}%`,
        }
      );
    }
    const pointOfAttention = await query.getMany();
    console.log('pointOfAttention', pointOfAttention);
    return pointOfAttention;
  }

  async setPointOfAttention1(
    newPointOfAttention: NewPointOfAttention
  ): Promise<PointOfAttention> {
    console.log(newPointOfAttention);
    const {
      pointName,
      pointNumber,
      pointLetter,
      callPriorityType,
      pointOfAttentionType,
      user,
      sector,
    } = newPointOfAttention;
    const newPointOfAttentionElement = this.create({
      pointName,
      pointNumber,
      pointLetter,
      callPriorityType,
      pointOfAttentionType,
      user,
      sector,
    });
    await this.save(newPointOfAttentionElement);
    return newPointOfAttentionElement;
  }

  async setPointOfAttention(
    newPointOfAttention: NewPointOfAttention
  ): Promise<PointOfAttention> {
    console.log(newPointOfAttention);
    const {
      pointName,
      pointNumber,
      pointLetter,
      callPriorityType,
      pointOfAttentionType,
      user,
      sector,
    } = newPointOfAttention;
    const newPointOfAttentionElement = this.create({
      pointName,
      pointNumber,
      pointLetter,
      callPriorityType,
      pointOfAttentionType,
      user,
      sector,
    });
    console.log('newPointOfAttentionElement', newPointOfAttentionElement);
    await this.save(newPointOfAttentionElement);
    return newPointOfAttentionElement;
  }

  async putPointOfAttention(
    putCurrentPointOfAttention: CurrentPointOfAttention
  ): Promise<PointOfAttention> {
    const updatePointOfAttentionElement: PointOfAttention =
      putCurrentPointOfAttention;
    await this.save(updatePointOfAttentionElement);
    return updatePointOfAttentionElement;
  }
}

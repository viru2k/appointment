//TypeOrm
import { EntityRepository, Repository } from 'typeorm';

// Entity
import { User } from '../../../auth/entities/user.entity';
import { Profile } from '../entities/profile.entity';

// DTO
import { FilterProfile } from '../dto/filter-profile.dto';
import { NewProfile } from '../dto/new-profile.dto';
import { CurrentProfile } from '../dto/current-profile.dto';

@EntityRepository(Profile)
export class ProfileRepository extends Repository<CurrentProfile> {
  async getAllProfile(
    filter: FilterProfile,
    user: User
  ): Promise<CurrentProfile[]> {
    const { search } = filter;
    const query = this.createQueryBuilder('profile').leftJoinAndSelect(
      'profile.user',
      'user'
    );
    query.where({ user });

    if (search) {
      query.andWhere(
        '(LOWER(profile.profileName) OR LOWER(profile.profileLetter) )  LIKE :search',
        {
          search: `%${search}%`,
        }
      );
    }
    const profile = await query.getMany();
    return profile;
  }

  async setProfile(newProfile: NewProfile): Promise<CurrentProfile> {
    console.log(newProfile);
    const { sendNotification, user, module } = newProfile;
    const newProfileElement = this.create({
      sendNotification,
      user,
      module,
    });
    await this.save(newProfileElement);
    return newProfileElement;
  }

  async putProfile(putCurrentProfile: CurrentProfile): Promise<CurrentProfile> {
    const updatePointOfAttentionElement: CurrentProfile = putCurrentProfile;
    await this.save(updatePointOfAttentionElement);
    return updatePointOfAttentionElement;
  }
}

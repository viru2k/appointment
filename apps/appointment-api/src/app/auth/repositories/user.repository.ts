import { EntityRepository, Repository } from 'typeorm';

//Entity
import { User } from '../entities/user.entity';
// DTO
import { NewUser } from '../dto/new-user.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(newUser: NewUser): Promise<void> {
    console.log(newUser);
    const user = this.create(newUser);
    await this.save(user);
  }
}

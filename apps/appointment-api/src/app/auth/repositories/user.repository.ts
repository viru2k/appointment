import { EntityRepository, Repository } from 'typeorm';

//Entity
import { User } from '../entities/user.entity';
// DTO
import { NewUser } from '../dto/new-user.dto';

// bcrypt
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(newUser: NewUser): Promise<void> {
    const { username, email, role } = newUser;

    // hash
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(newUser.password, salt);

    const user = this.create({
      username,
      password: hashedPassword,
      email,
      role,
    });
    await this.save(user);
  }
}

//Nest
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FilterAuth } from './dto/filter-auth.dto';
import { NewUser } from './dto/new-user.dto';

// Entity
import { User } from './entities/user.entity';

// Repository
import { UserRepository } from './repositories/user.repository';

// DTO

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository
  ) {}

  async signUp(newUser: NewUser): Promise<void> {
    return this.userRepository.createUser(newUser);
  }
}

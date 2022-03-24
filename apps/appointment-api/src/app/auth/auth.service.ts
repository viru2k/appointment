//Nest
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';

// bcrypt
import * as bcrypt from 'bcrypt';

// Repository
import { UserRepository } from './repositories/user.repository';

// DTO
import { AuthUser } from './dto/auth-user.dto';
import { FilterAuth } from './dto/filter-auth.dto';
import { NewUser } from './dto/new-user.dto';
import { JWTPayload } from './jwt/jwt-payload.interface';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService
  ) {}

  async signUp(newUser: NewUser): Promise<void> {
    return this.userRepository.createUser(newUser);
  }

  async signIn(authUser: AuthUser): Promise<{ accessToken: string }> {
    const { username, password } = authUser;
    const user = await this.userRepository.findOne({ username });
    if (user && (await bcrypt.compare(password, user.password))) {
      const payload: JWTPayload = { username };
      const accessToken: string = await this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('Please check your login credentials');
    }
    // return this.userRepository.createUser(authUser);
  }
}

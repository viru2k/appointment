//Nest
import { Module } from '@nestjs/common';

// JWT
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JWTStrategy } from './jwt/jwt.strategy';

//TypeOrm
import { TypeOrmModule } from '@nestjs/typeorm';

// Controller
import { AuthController } from './auth.controller';

//Service
import { AuthService } from './auth.service';

// Repository
import { UserRepository } from './repositories/user.repository';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'turnos!23_#',
      signOptions: {
        expiresIn: 3000, // expiration time del token
      },
    }),
    TypeOrmModule.forFeature([UserRepository]),
  ],
  controllers: [AuthController],
  providers: [AuthService, JWTStrategy],
  exports: [JWTStrategy, PassportModule],
})
export class AuthModule {}

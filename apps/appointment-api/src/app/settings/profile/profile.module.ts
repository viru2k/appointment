//Nest
import { Module } from '@nestjs/common';

//TypeOrm
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../../auth/auth.module';

// Controller
import { ProfileController } from './profile.controller';

//Service
import { ProfileService } from './profile.service';

// Repository
import { ProfileRepository } from './repositories/profile.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ProfileRepository]), AuthModule],
  controllers: [ProfileController],
  providers: [ProfileService],
})
export class ProfileModule {}

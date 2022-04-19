//Nest
import { Module } from '@nestjs/common';

//TypeOrm
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './../../auth/auth.module';

// Controller
import { PointOfAttentionController } from './pointofattention.controller';

//Service
import { PointOfAttentionService } from './pointofattention.service';

// Repository
import { PointOfAttentionRepository } from './repositories/pointofattention.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PointOfAttentionRepository]), AuthModule],
  controllers: [PointOfAttentionController],
  providers: [PointOfAttentionService],
})
export class PointOfAttentionModule {}

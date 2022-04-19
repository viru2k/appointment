//Nest
import { Module } from '@nestjs/common';

//TypeOrm
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../../auth/auth.module';

// Controller
import { SectorController } from './sector.controller';

//Service
import { SectorService } from './sector.service';

// Repository
import { SectorRepository } from './repositories/sector.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SectorRepository]), AuthModule],
  controllers: [SectorController],
  providers: [SectorService],
})
export class SectorModule {}

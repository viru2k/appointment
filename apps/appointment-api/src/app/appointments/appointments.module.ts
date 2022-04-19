//Nest
import { Module } from '@nestjs/common';

//TypeOrm
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';

// Controller
import { AppointmentsController } from './appointments.controller';
import { SectorController } from '../settings/sector/sector.controller';
import { PointOfAttentionController } from './../settings/pointofattention/pointofattention.controller';
import { ProfileController } from '../settings/profile/profile.controller';
import { ModuleController } from '../settings/modules/module.controller';

//Service
import { AppointmentsService } from './appointments.service';
import { SectorService } from '../settings/sector/sector.service';
import { PointOfAttentionService } from './../settings/pointofattention/pointofattention.service';
import { ProfileService } from '../settings/profile/profile.service';
import { ModuleService } from '../settings/modules/module.service';

// Repository
import { AppointmentRepository } from './repositories/appointment.repository';
import { PointOfAttentionRepository } from '../settings/pointofattention/repositories/pointofattention.repository';
import { SectorRepository } from '../settings/sector/repositories/sector.repository';
import { ProfileRepository } from '../settings/profile/repositories/profile.repository';
import { ModuleRepository } from '../settings/modules/repositories/module.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      AppointmentRepository,
      PointOfAttentionRepository,
      SectorRepository,
      ProfileRepository,
      ModuleRepository,
    ]),
    AuthModule,
  ],
  controllers: [
    AppointmentsController,
    PointOfAttentionController,
    SectorController,
    ProfileController,
    ModuleController,
  ],
  providers: [
    AppointmentsService,
    PointOfAttentionService,
    SectorService,
    ProfileService,
    ModuleService,
  ],
})
export class AppointmentsModule {}

//Nest
import { Module } from '@nestjs/common';

//TypeOrm
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from '../auth/auth.module';

// Controller
import { AppointmentsController } from './appointments.controller';

//Service
import { AppointmentsService } from './appointments.service';

// Repository
import { AppointmentRepository } from './repositories/appointment.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AppointmentRepository]), AuthModule],
  controllers: [AppointmentsController],
  providers: [AppointmentsService],
})
export class AppointmentsModule {}

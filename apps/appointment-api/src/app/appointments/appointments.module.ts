//Nest
import { Module } from '@nestjs/common';

//TypeOrm
import { TypeOrmModule } from '@nestjs/typeorm';

// Controller
import { AppointmentsController } from './appointments.controller';

//Service
import { AppointmentsService } from './appointments.service';

// Repository
import { AppointmentRepository } from './repositories/appointment.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AppointmentRepository])],
  controllers: [AppointmentsController],
  providers: [AppointmentsService],
})
export class AppointmentsModule {}

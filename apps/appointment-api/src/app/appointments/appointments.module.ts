//Agular
import { Module } from '@nestjs/common';
// Controller
import { AppointmentsController } from './appointments.controller';
//Service
import { AppointmentsService } from './appointments.service';

@Module({
  controllers: [AppointmentsController],
  providers: [AppointmentsService],
})
export class AppointmentsModule {}

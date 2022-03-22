//Agular
import { Body, Controller, Get, Post, Param, Put, Patch } from '@nestjs/common';

//Services
import { AppointmentsService } from './appointments.service';

//Model
import { NewAppointent } from './dto/new-appointment.dto';
import { CurrentAppointment } from './dto/current-appointment.dto';
import { Appointment } from './entities/appointment.entity';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';
@ApiTags('Appointments')
@Controller('appointments')
export class AppointmentsController {
  constructor(private appointmentsService: AppointmentsService) {}

  @Get()
  @ApiResponse({
    status: 201,
    type: CurrentAppointment,
    isArray: true,
    description: 'Creates new user object.',
  })
  @ApiForbiddenResponse({ description: 'Forbiden' })
  getAllAppointments(): Promise<Appointment[]> {
    return this.appointmentsService.getAllAppointemnts();
  }

  @Get('/:id')
  @ApiOkResponse({ description: 'The results element has been correct' })
  @ApiForbiddenResponse({ description: 'Forbiden' })
  getAppointmentsByPOS(@Param('id') id: string): Promise<Appointment> {
    return this.appointmentsService.getAppointmenById(id);
  }

  @Post()
  @ApiCreatedResponse({
    description: 'The resource has been  successfully created',
  })
  @ApiForbiddenResponse({ description: 'Forbiden' })
  postAppointment(
    @Body() newAppointentDto: NewAppointent
  ): Promise<Appointment> {
    return this.appointmentsService.newAppointment(newAppointentDto);
  }

  @Patch('/:id')
  @ApiOkResponse({ description: 'The resource has been  successfully updated' })
  @ApiForbiddenResponse({ description: 'Forbiden' })
  putAppointment(
    @Param('id') id: string,
    @Body() currentAppointment: CurrentAppointment
  ): Promise<Appointment> {
    return this.appointmentsService.putAppointment(id, currentAppointment);
  }
}

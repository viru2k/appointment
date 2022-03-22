//Agular
import { Body, Controller, Get, Post, Param, Put } from '@nestjs/common';

//Services
import { AppointmentsService } from './appointments.service';

//Model
import { NewAppointent } from './dto/new-appointment.dto';
import { CurrentAppointment } from './dto/current-appointment.dto';
import { AppointmentEntity } from './entities/appointment.entity';
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
  getAllAppointments(): Promise<AppointmentEntity[]> {
    return this.appointmentsService.getAllAppointemnts();
  }

  @Get('/:id')
  @ApiOkResponse({ description: 'The results element has been correct' })
  @ApiForbiddenResponse({ description: 'Forbiden' })
  getAppointmentsByPOS(@Param('id') id: string): Promise<AppointmentEntity> {
    return this.appointmentsService.getAppointmenById(id);
  }

  @Post()
  @ApiCreatedResponse({
    description: 'The resource has been  successfully created',
  })
  @ApiForbiddenResponse({ description: 'Forbiden' })
  postAppointment(
    @Body() newAppointentDto: NewAppointent
  ): Promise<AppointmentEntity> {
    return this.appointmentsService.newAppointment(newAppointentDto);
  }
  /* 
  @Put()
  @ApiOkResponse({ description: 'The resource has been  successfully updated' })
  @ApiForbiddenResponse({ description: 'Forbiden' })
  putAppointment(
    @Body() currentAppointment: CurrentAppointment
  ): CurrentAppointment {
    return <CurrentAppointment>(
      this.appointmentsService.updateAppointment(currentAppointment)
    );
  } */
}

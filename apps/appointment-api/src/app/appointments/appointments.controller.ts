//Agular
import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Put,
  Patch,
  Query,
} from '@nestjs/common';
//Nest
import { AuthGuard } from '@nestjs/passport';
import { UseGuards } from '@nestjs/common';

//Services
import { AppointmentsService } from './appointments.service';

//Model
import { FilterAppointment } from './dto/filter-appointment.dto';
import { NewAppointent } from './dto/new-appointment.dto';
import { CurrentAppointment } from './dto/current-appointment.dto';

//Entity
import { Appointment } from './entities/appointment.entity';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';
import { User } from '../auth/entities/user.entity';
import { GetUser } from '../auth/decorators/get-user.decorator';
@ApiTags('Appointments')
@Controller('appointments')
@UseGuards(AuthGuard())
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
  getAllAppointments(
    @Query() filter: FilterAppointment,
    @GetUser() user: User
  ): Promise<Appointment[]> {
    return this.appointmentsService.getAllAppointemnts(filter, user);
  }

  @Get('/:id')
  @ApiOkResponse({ description: 'The results element has been correct' })
  @ApiForbiddenResponse({ description: 'Forbiden' })
  getAppointmentsByPOS(
    @Param('id') id: string,
    @GetUser() user: User
  ): Promise<Appointment> {
    return this.appointmentsService.getAppointmenById(id, user);
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
    @Body() currentAppointment: CurrentAppointment,
    @GetUser() user: User
  ): Promise<Appointment> {
    return this.appointmentsService.putAppointment(
      id,
      currentAppointment,
      user
    );
  }
}

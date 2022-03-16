import { AppointmentStatusEnums } from '../enums/AppointmentStatusEnums';
import { ApiProperty } from '@nestjs/swagger';

export class CurrentAppointment {
  @ApiProperty({ type: 'string', required: true })
  id: string;
  @ApiProperty({ type: 'string', required: false })
  description: string;
  @ApiProperty({
    enum: AppointmentStatusEnums,
    isArray: true,
    required: true,
  })
  status: AppointmentStatusEnums;
}

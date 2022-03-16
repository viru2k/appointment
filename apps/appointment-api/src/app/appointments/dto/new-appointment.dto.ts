import { ApiProperty } from '@nestjs/swagger';
import { AppointmentStatusEnums } from '../enums/AppointmentStatusEnums';

export class NewAppointent {
  @ApiProperty({ type: 'string', required: false })
  description: string;

  @ApiProperty({
    enum: AppointmentStatusEnums,
    isArray: true,
    required: true 
  })
  status: AppointmentStatusEnums;
}

import { ApiProperty } from '@nestjs/swagger';

export class FilterAppointment {
  @ApiProperty({ type: 'string', required: false })
  status: string;
  @ApiProperty({ type: 'string', required: false })
  search: string;
}

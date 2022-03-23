import { ApiProperty } from '@nestjs/swagger';

export class FilterAuth {
  @ApiProperty({ type: 'string', required: false })
  status: string;
  @ApiProperty({ type: 'string', required: false })
  search: string;
}

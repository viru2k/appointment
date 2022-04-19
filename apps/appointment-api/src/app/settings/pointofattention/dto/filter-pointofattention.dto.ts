//Swagger
import { ApiProperty } from '@nestjs/swagger';

export class FilterPointOfAttention {
  @ApiProperty({ type: 'string', required: false })
  pointName: string;

  @ApiProperty({ type: 'string', required: false })
  pointOfAttentionType: string;

  @ApiProperty({ type: 'string', required: false })
  callPriorityType: string;

  @ApiProperty({ type: 'string', required: false })
  search: string;
}

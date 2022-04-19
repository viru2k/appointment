//Swagger
import { ApiProperty } from '@nestjs/swagger';

export class FilterProfile {
  @ApiProperty({ type: 'string', required: false })
  sectorName: string;

  @ApiProperty({ type: 'string', required: false })
  sectorLetter: string;

  @ApiProperty({ type: 'string', required: false })
  search: string;
}

import { RoleEnums } from '../enums/role-enums';
import { ApiProperty } from '@nestjs/swagger';

export class CurrentAuth {
  @ApiProperty({ type: 'string', required: true })
  id: string;
  @ApiProperty({ type: 'string', required: false })
  description: string;
  @ApiProperty({
    enum: RoleEnums,
    isArray: true,
    required: true,
  })
  status: RoleEnums;
}

import { RoleEnums } from '../enums/role-enums';
import { ApiProperty } from '@nestjs/swagger';

export class BasicUser {
  @ApiProperty({ type: 'string', required: true })
  id: string;
  @ApiProperty({ type: 'string', required: false })
  username: string;
  @ApiProperty({ type: 'string', required: false })
  email: string;
  @ApiProperty({
    enum: RoleEnums,
    isArray: true,
    required: true,
  })
  role: RoleEnums;
}

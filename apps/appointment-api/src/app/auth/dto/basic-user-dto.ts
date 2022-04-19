import { ApiProperty } from '@nestjs/swagger';

// Class validator
import { IsNotEmpty } from 'class-validator';

// Enum
import { RoleEnums } from '../enums/role-enums';
export class BasicUser {
  @ApiProperty({ type: 'string', required: false })
  @IsNotEmpty()
  id: string;
  @ApiProperty({ type: 'string', required: false })
  username: string;
  @ApiProperty({ type: 'string', required: false })
  email: string;
  @ApiProperty({
    enum: RoleEnums,
    isArray: true,
    required: false,
  })
  role: RoleEnums;
}

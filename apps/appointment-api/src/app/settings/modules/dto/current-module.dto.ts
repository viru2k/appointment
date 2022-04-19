//Swagger
import { ApiProperty } from '@nestjs/swagger';

// class validator
import { IsNotEmpty } from 'class-validator';

//Entity

import { ModulePermissionEnum } from '../../modules//enums/module-enum';
import { Profile } from '../../profile/entities/profile.entity';

export class CurrentModule {
  @ApiProperty({
    enum: ModulePermissionEnum,
    isArray: true,
    required: true,
  })
  moduleName: ModulePermissionEnum;

  @ApiProperty({ type: Profile, required: false })
  profile: Profile;
}

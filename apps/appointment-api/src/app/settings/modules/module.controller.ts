//Agular
import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Put,
  Patch,
  Query,
} from '@nestjs/common';
//Nest
import { AuthGuard } from '@nestjs/passport';
import { UseGuards } from '@nestjs/common';

//Services
import { ModuleService } from './module.service';

//Model

import { CurrentModule } from './dto/current-module.dto';

//Entity

import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';

import { GetProfile } from '../../auth/decorators/get-profile.decorator';
import { Profile } from './../profile/entities/profile.entity';

@ApiTags('Module')
@Controller('module')
@UseGuards(AuthGuard())
export class ModuleController {
  constructor(private moduleService: ModuleService) {}

  @Get()
  @ApiResponse({
    status: 200,
    type: CurrentModule,
    isArray: true,
    description: 'Return a list of Module',
  })
  @ApiForbiddenResponse({ description: 'Forbiden' })
  getAll(@GetProfile() profile: Profile): Promise<CurrentModule[]> {
    return this.moduleService.getAllModule(profile);
  }
}

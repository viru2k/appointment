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
import { ProfileService } from './profile.service';

//Model
import { FilterProfile } from './dto/filter-profile.dto';

import { CurrentProfile } from './dto/current-profile.dto';

//Entity

import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiOkResponse,
  ApiResponse,
  ApiTags,
  getSchemaPath,
} from '@nestjs/swagger';

import { GetUser } from '../../auth/decorators/get-user.decorator';
import { User } from '../../auth/entities/user.entity';
import { NewProfile } from './dto/new-profile.dto';

@ApiTags('Profile')
@Controller('profile')
@UseGuards(AuthGuard())
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @Get()
  @ApiResponse({
    status: 200,
    type: CurrentProfile,
    isArray: true,
    description: 'Return a list of Profile',
  })
  @ApiForbiddenResponse({ description: 'Forbiden' })
  getAll(
    @Query() filter: FilterProfile,
    @GetUser() user: User
  ): Promise<CurrentProfile[]> {
    return this.profileService.getAllProfile(filter, user);
  }

  @Get('/:id')
  @ApiOkResponse({ description: 'The results element has been correct' })
  @ApiForbiddenResponse({ description: 'Forbiden' })
  getById(
    @Param('id') id: string,
    @GetUser() user: User
  ): Promise<CurrentProfile> {
    return this.profileService.getProfileById(id, user);
  }

  @Post()
  @ApiCreatedResponse({
    description: 'The resource has been  successfully created',
  })
  @ApiForbiddenResponse({ description: 'Forbiden' })
  postProfile(@Body() newProfileDto: NewProfile): Promise<CurrentProfile> {
    return this.profileService.newProfile(newProfileDto);
  }

  @Patch('/:id')
  @ApiOkResponse({ description: 'The resource has been  successfully updated' })
  @ApiForbiddenResponse({ description: 'Forbiden' })
  putProfile(
    @Param('id') id: string,
    @Body() CurrentProfile: CurrentProfile,
    @GetUser() user: User
  ): Promise<CurrentProfile> {
    //  return this.profileService.putProfile(id, CurrentProfile, user);
    return null;
  }
}

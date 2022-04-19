import { createParamDecorator, ExecutionContext } from '@nestjs/common';

//Entity
import { Profile } from './../../settings/profile/entities/profile.entity';

export const GetProfile = createParamDecorator(
  (_data, ctx: ExecutionContext): Profile => {
    const req = ctx.switchToHttp().getRequest();
    return req.profile;
  }
);

import { PublicUserEnums } from './PublicUser.model';
export declare class AuthUser {
  userName: string;
  fullName: string;
  captcha: boolean;
  status: PublicUserEnums.Status;
  changePassword: boolean;
  roles: string[];
  warning: string;
  constructor(attrs?: AuthUserAttrs);
}
export interface AuthUserAttrs {
  userName?: string;
  fullName?: string;
  captcha?: boolean;
  status?: PublicUserEnums.Status;
  changePassword?: boolean;
  roles?: string[];
  warning?: string;
}

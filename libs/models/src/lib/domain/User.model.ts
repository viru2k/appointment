import { PublicUserEnums } from './PublicUser.model';
export declare class User {
  userName: string;
  fullName: string;
  captcha: boolean;
  status: PublicUserEnums.Status;
  changePassword: boolean;
  roles: string[];
  warning: string;
  id: string;
  lastLogin: string;
  timestamp: string;
  constructor(attrs?: UserAttrs);
}
export interface UserAttrs {
  userName?: string;
  fullName?: string;
  captcha?: boolean;
  status?: PublicUserEnums.Status;
  changePassword?: boolean;
  roles?: string[];
  warning?: string;
  id?: string;
  lastLogin?: string;
  timestamp?: string;
}

/* tslint:disable */
/* eslint-disable */
export interface NewUser {
  email: string;
  password: string;
  role: Array<'ADMIN' | 'OPERATOR' | 'USER' | 'DISABLED'>;
  username: string;
}

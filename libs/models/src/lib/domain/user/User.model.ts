export declare class User {
  id: string;
  username: string;
  password: string;
  role: RoleEnums.Type[];

  constructor(attrs?: UserAttrs);
}
export interface UserAttrs {
  id: string;
  username: string;
  password: string;
  role: RoleEnums.Type[];
}

export declare namespace RoleEnums {
  enum Type {
    'ADMIN',
    'USER',
    'INVITED',
  }
}

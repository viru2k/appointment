export declare class PublicUser {
  userName: string;
  fullName: string;
  status: PublicUserEnums.Status;
  constructor(attrs?: PublicUserAttrs);
}
export interface PublicUserAttrs {
  userName?: string;
  fullName?: string;
  status?: PublicUserEnums.Status;
}
export declare namespace PublicUserEnums {
  enum Status {
    'ACTIVE',
    'LOCKED',
    'DISABLED',
    'EXPIRED',
  }
}

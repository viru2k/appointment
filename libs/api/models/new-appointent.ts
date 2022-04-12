/* tslint:disable */
/* eslint-disable */
export interface NewAppointent {
  description?: string;
  number?: number;
  status: Array<'PENDING' | 'CANCELED' | 'PRESENT' | 'ABSENT' | 'CALLING' | 'ATENDENDED'>;
  ticket?: string;
}

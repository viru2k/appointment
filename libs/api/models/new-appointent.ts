/* tslint:disable */
/* eslint-disable */
export interface NewAppointent {
  description?: string;
  status: Array<'PENDING' | 'CANCELED' | 'PRESENT' | 'ABSENT' | 'CALLING' | 'ATENDENDED'>;
}

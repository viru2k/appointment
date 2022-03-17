/* tslint:disable */
/* eslint-disable */
export interface CurrentAppointment {
  description?: string;
  id: string;
  status: Array<'PENDING' | 'CANCELED' | 'PRESENT' | 'ABSENT' | 'CALLING' | 'ATENDENDED'>;
}

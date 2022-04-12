/* tslint:disable */
/* eslint-disable */
export interface CurrentAppointment {
  description?: string;
  id: string;
  number?: number;
  status: Array<'PENDING' | 'CANCELED' | 'PRESENT' | 'ABSENT' | 'CALLING' | 'ATENDENDED'>;
  ticket?: string;
}

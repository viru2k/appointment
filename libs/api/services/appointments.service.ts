/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { CurrentAppointment } from '../models/current-appointment';
import { NewAppointent } from '../models/new-appointent';

@Injectable({
  providedIn: 'root',
})
export class AppointmentsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation appointmentsControllerGetAllAppointments
   */
  static readonly AppointmentsControllerGetAllAppointmentsPath = '/appointments';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `appointmentsControllerGetAllAppointments()` instead.
   *
   * This method doesn't expect any request body.
   */
  appointmentsControllerGetAllAppointments$Response(params?: {
    status?: string;
    search?: string;
  }): Observable<StrictHttpResponse<Array<CurrentAppointment>>> {

    const rb = new RequestBuilder(this.rootUrl, AppointmentsService.AppointmentsControllerGetAllAppointmentsPath, 'get');
    if (params) {
      rb.query('status', params.status, {});
      rb.query('search', params.search, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CurrentAppointment>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `appointmentsControllerGetAllAppointments$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  appointmentsControllerGetAllAppointments(params?: {
    status?: string;
    search?: string;
  }): Observable<Array<CurrentAppointment>> {

    return this.appointmentsControllerGetAllAppointments$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CurrentAppointment>>) => r.body as Array<CurrentAppointment>)
    );
  }

  /**
   * Path part for operation appointmentsControllerPostAppointment
   */
  static readonly AppointmentsControllerPostAppointmentPath = '/appointments';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `appointmentsControllerPostAppointment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  appointmentsControllerPostAppointment$Response(params: {
    body: NewAppointent
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AppointmentsService.AppointmentsControllerPostAppointmentPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `appointmentsControllerPostAppointment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  appointmentsControllerPostAppointment(params: {
    body: NewAppointent
  }): Observable<void> {

    return this.appointmentsControllerPostAppointment$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation appointmentsControllerGetAppointmentsByPos
   */
  static readonly AppointmentsControllerGetAppointmentsByPosPath = '/appointments/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `appointmentsControllerGetAppointmentsByPos()` instead.
   *
   * This method doesn't expect any request body.
   */
  appointmentsControllerGetAppointmentsByPos$Response(params: {
    id: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AppointmentsService.AppointmentsControllerGetAppointmentsByPosPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `appointmentsControllerGetAppointmentsByPos$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  appointmentsControllerGetAppointmentsByPos(params: {
    id: string;
  }): Observable<void> {

    return this.appointmentsControllerGetAppointmentsByPos$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation appointmentsControllerPutAppointment
   */
  static readonly AppointmentsControllerPutAppointmentPath = '/appointments/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `appointmentsControllerPutAppointment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  appointmentsControllerPutAppointment$Response(params: {
    id: string;
    body: CurrentAppointment
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AppointmentsService.AppointmentsControllerPutAppointmentPath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `appointmentsControllerPutAppointment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  appointmentsControllerPutAppointment(params: {
    id: string;
    body: CurrentAppointment
  }): Observable<void> {

    return this.appointmentsControllerPutAppointment$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}

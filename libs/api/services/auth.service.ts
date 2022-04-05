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

import { AuthUser } from '../models/auth-user';
import { NewUser } from '../models/new-user';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation authControllerSignUp
   */
  static readonly AuthControllerSignUpPath = '/Auth/signup';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authControllerSignUp()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authControllerSignUp$Response(params: {
    body: NewUser
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.AuthControllerSignUpPath, 'post');
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
   * To access the full response (for headers, for example), `authControllerSignUp$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authControllerSignUp(params: {
    body: NewUser
  }): Observable<void> {

    return this.authControllerSignUp$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation authControllerSignIn
   */
  static readonly AuthControllerSignInPath = '/Auth/signin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `authControllerSignIn()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authControllerSignIn$Response(params: {
    body: AuthUser
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.AuthControllerSignInPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `authControllerSignIn$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  authControllerSignIn(params: {
    body: AuthUser
  }): Observable<string> {

    return this.authControllerSignIn$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

}

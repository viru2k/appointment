import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private injector: Injector) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    let currenttoken = JSON.parse(localStorage.getItem('currenttoken'));
    console.log('currenttoken', currenttoken);
    if (currenttoken) {
      console.log(currenttoken['accessToken']);
    }
    if (currenttoken && currenttoken['accessToken']) {
      request = request.clone({
        setHeaders: {
          //   Authorization: `Bearer ${currenttoken.token}`
          Authorization: `Bearer ${currenttoken['accessToken']}`,
        },
      });
    }

    return next.handle(request);
  }
}

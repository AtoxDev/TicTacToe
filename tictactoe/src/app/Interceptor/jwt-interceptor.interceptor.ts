import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpErrorResponse
} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError} from "rxjs/operators";
import {Router} from "@angular/router";


@Injectable()
export class JwtInterceptorInterceptor implements HttpInterceptor {

  private token: any;

  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    this.token = localStorage.getItem('userToken');
    let req = request;
    if (this.token) {
      req = request.clone({
        setHeaders: {
          authorization: `Bearer ${this.token}`
        }
      });
    }


    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {

        if (err.status === 401) {
          this.router.navigateByUrl('/login');
        }

        return throwError(err);

      })
    );

  }
}


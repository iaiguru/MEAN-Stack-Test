import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import ErrorMessage from '../constants/error.constant';

export class HttpErrorInterceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = ErrorMessage.APICallFailed;
        if (error.error instanceof ErrorEvent) {
          // client-side error
        } else {
          // server-side error
          if (error.status === 0) {
            errorMessage += `: ${error.statusText}`;
          } else {
            errorMessage = `${error.error}`;
          }
        }
        return throwError(errorMessage);
      })
    );
  }
}

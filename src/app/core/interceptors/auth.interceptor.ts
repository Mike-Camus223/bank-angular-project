import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Obtener el token de autenticación
    const authToken = localStorage.getItem('authToken');
    const clonedReq = req.clone({
      setHeaders: {
        Authorization: authToken ? `Bearer ${authToken}` : ''
      }
    });

    return next.handle(clonedReq).pipe(
      catchError((error: HttpErrorResponse) => {
        // Manejo de errores
        return throwError(error);
      })
    );
  }
}

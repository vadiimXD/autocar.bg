import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
//!fix types
@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

  get user(): any {
    const auth = localStorage.getItem("auth") as string
    return JSON.parse(auth);
  }

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    if (request.method == "GET") {
      request = request.clone({
        setHeaders: {
          'Content-Type': 'application/json',
        }
      })
    }



    if (request.method == "POST" || request.method == "PUT" || request.method == "DELETE") {
      
      const user: any = this.user
      if (user) {
        request = request.clone({
          setHeaders: {
            'Content-Type': 'application/json',
            'X-Authorization': user.token
          }
        })
      } else {
        request = request.clone({
          setHeaders: {
            'Content-Type': 'application/json',
          }
        })
      }
    }
debugger
    return next.handle(request);
  }
}

export const GlobalInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  multi: true,
  useClass: GlobalInterceptor
}
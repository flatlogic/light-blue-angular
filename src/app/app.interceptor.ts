import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AppConfig } from './app.config';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  config;

  constructor(
    appConfig: AppConfig
  ) {
    this.config = appConfig.getConfig();
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Only application API requests use the configured backend and its session.
    if (!req.url.startsWith('/') || req.url.startsWith('//') || req.url.includes('\\')) {
      return next.handle(req);
    }
    req = req.clone({ url: this.config.baseURLApi + req.url });

    const token: string = localStorage.getItem('token');
    if (token) {
      req = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + token)
      });
    }

    return next.handle(req);
  }
}

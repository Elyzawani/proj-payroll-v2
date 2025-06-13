import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor, HttpRequest
} from "@angular/common/http";
import {
  Observable
} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiKeyInterceptor implements HttpInterceptor {
  private apiKey = '44932d31-tzlt-3500-kyzm-8fe08d0df42b'; // Replace with your actual API key

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Clone the request and add the API key to the headers
    const modifiedRequest = request.clone({
      setHeaders: { 'X-Api-Key': this.apiKey },
    });

    // Pass the modified request to the next handler
    return next.handle(modifiedRequest);
  }
}

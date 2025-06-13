import { Injectable } from '@angular/core';
import {
  Observable,
  throwError
} from "rxjs";
import {
  DebitNote
} from "../../class/modules/gl/debitnote";
import {
  catchError
} from "rxjs/operators";
import {
  HttpClient
} from "@angular/common/http";
import {
  environment
} from "../../../environments/environment";
import {
  BankData
} from "../../modules/setup/company/bank/bank-data";
import {
  BankDataOne
} from "../../modules/setup/company/bank/bank-data-one";
import {
  InvoiceData
} from "./invoice-data";

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private baseUrl = `${environment.baseUrl}/fms/general`;

  constructor(private http: HttpClient) { }

  getBankData(): Observable<BankDataOne[]> {
    return this.http.get<BankDataOne[]>(`${this.baseUrl}/dashboard/bankdata`).pipe(
      catchError((error) => {
        console.error('Error occurred:', error);
        // Handle the error and provide appropriate feedback to the user
        // For example, show an error message or redirect to an error page
        return throwError('An error occurred. Please try again later.');
      })
    );
  }

  getNetProfitData(): Observable<number[]> {
    return this.http.get<number[]>(`${this.baseUrl}/dashboard/net-profit-data`); // Adjust URL if needed
  }

  getInvoiceData(type: String): Observable<InvoiceData> {
    return this.http.get<InvoiceData>(`${this.baseUrl}/dashboard/invoice-data/${type}`).pipe(
      catchError((error) => {
        console.error('Error occurred:', error);
        // Handle the error and provide appropriate feedback to the user
        // For example, show an error message or redirect to an error page
        return throwError('An error occurred. Please try again later.');
      })
    );
  }
}

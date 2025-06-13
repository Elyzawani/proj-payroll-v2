import { Injectable } from '@angular/core';
import {
  environment
} from "../../../../../../../environments/environment";
import {
  HttpClient
} from "@angular/common/http";
import {
  Observable,
  throwError
} from "rxjs";
import {
  BankDataOne
} from "../../../../../../modules/setup/company/bank/bank-data-one";
import {
  catchError
} from "rxjs/operators";
import {
  ModuleCategory
} from "./module-category";

@Injectable({
  providedIn: 'root'
})
export class ModuleListService {

  private baseUrl = `${environment.baseUrl}/fms/util/module`;

  constructor(private http: HttpClient) { }

  getModule(): Observable<ModuleCategory[]> {
    return this.http.get<ModuleCategory[]>(`${this.baseUrl}/all`).pipe(
      catchError((error) => {
        console.error('Error occurred:', error);
        // Handle the error and provide appropriate feedback to the user
        // For example, show an error message or redirect to an error page
        return throwError('An error occurred. Please try again later.');
      })
    );
  }
}

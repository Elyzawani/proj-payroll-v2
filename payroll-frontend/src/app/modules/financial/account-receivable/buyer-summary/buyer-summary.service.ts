import { Injectable } from '@angular/core';
import {
  environment
} from "../../../../../environments/environment";
import {
  HttpClient,
  HttpParams
} from "@angular/common/http";
import {
  Observable,
  throwError
} from "rxjs";
import {
  DebitNote
} from "../../../../class/modules/gl/debitnote";
import {
  catchError
} from "rxjs/operators";
import {
  SearchInputParameter
} from "../../../../class/search-input-parameter";
import {
  BuyerInfo
} from "../../../setup/configuration/buyer/buyer-info";

@Injectable({
  providedIn: 'root'
})
export class BuyerSummaryService {

  private baseUrl = `${environment.baseUrl}/fms/financial`;
  private directUrl = `${environment.directAPI}/financial`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<BuyerInfo[]> {
    return this.http.get<BuyerInfo[]>(`${this.baseUrl}/gl/debitnote/all`).pipe(
      catchError((error) => {
        console.error('Error occurred:', error);
        // Handle the error and provide appropriate feedback to the user
        // For example, show an error message or redirect to an error page
        return throwError('An error occurred. Please try again later.');
      })
    );
  }

  searchAllDT(dti: SearchInputParameter): Observable<any> {
    const params = new HttpParams()
      .set('pageNumber', dti.pageNumber.toString())
      .set('pageSize', dti.pageSize.toString())
      .set('sortColumn', dti.sortColumn)
      .set('sortDirection', dti.sortDirection)
      .set('searchInput', dti.searchInput);

    //return this.http.get<any>(`${this.baseUrl}/gl/debitnote/searchdt`, { params });
    return this.http.get<any>(`http://localhost:8115/api/financial/gl/debitnote/searchdt`, { params });
  }

  getFilteredList(params: any) {
    console.log(params);
    const requestParams = {
      params: {
        page: params.first / params.rows,
        size: params.rows,
        sort: params.sortField ? `${params.sortField},${params.sortOrder === 2 ? 'asc' : 'desc'}` : '',

        //sort: params.sortField ? `${params.sortField},${params.sortOrder ? params.sortOrder === 1 ? 'asc' : 'desc' : 'asc'}` : '',
        filter: params.globalFilter || ''
      }
    };
    console.log(requestParams);
    return this.http.get(`http://localhost:8115/api/financial/setup/configuration/buyer/list`, requestParams);
  }

  getBuyerbyID(id: String): Observable<BuyerInfo> {
    return this.http.get<BuyerInfo>(`${this.directUrl}/setup/configuration/buyer/view/${id}`).pipe(
      catchError((error) => {
        console.error('Error occurred:', error);
        // Handle the error and provide appropriate feedback to the user
        // For example, show an error message or redirect to an error page
        return throwError('An error occurred. Please try again later.');
      })
    );
  }
}

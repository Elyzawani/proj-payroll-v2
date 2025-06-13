import { Injectable } from '@angular/core';
import {
  Observable, throwError
} from "rxjs";
import {
  DebitNote
} from "../../../class/modules/gl/debitnote";
import {
  environment
} from "../../../../environments/environment";
import {
  HttpClient, HttpParams
} from "@angular/common/http";
import {
  catchError, map
} from "rxjs/operators";
import {
  SearchInputParameter
} from "../../../class/search-input-parameter";
import {
  BuyerInfo
} from "../../../modules/setup/configuration/buyer/buyer-info";
import {
  DomSanitizer
} from "@angular/platform-browser";

@Injectable({
  providedIn: 'root'
})
export class DebitnoteService {

  private baseUrl = `${environment.baseUrl}/fms/financial`;
  private directUrl = `${environment.directAPI}/financial`;

  constructor(private http: HttpClient,  private sanitizer: DomSanitizer) { }

  getAll(): Observable<DebitNote[]> {
    return this.http.get<DebitNote[]>(`${this.baseUrl}/gl/debitnote/all`).pipe(
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
        filter: params.globalFilter || '',
        timeview: params.timeview || '',
        personview: params.personview || '',
        staffid: params.staffid || ''
      }
    };
    console.log(requestParams);
    return this.http.get(`${this.baseUrl}/gl/debitnote/master/list`, requestParams);
    //return this.http.get(`http://localhost:8115/api/financial/gl/debitnote/master/list`, requestParams);
  }

  getDetailbyID(id: String): Observable<DebitNote> {
    return this.http.get<DebitNote>(`${this.directUrl}/gl/debitnote/view/${id}`).pipe(
      catchError((error) => {
        console.error('Error occurred:', error);
        // Handle the error and provide appropriate feedback to the user
        // For example, show an error message or redirect to an error page
        return throwError('An error occurred. Please try again later.');
      })
    );
  }

  getStatusLabel(rowData: DebitNote): string {
    if (rowData.approveid && rowData.approveid.length > 0) {
      return 'Approved';
    }
    if (rowData.postflag === 'Cancel') {
      return 'Cancelled';
    }
    return 'Preparing';
  }

  getStatusClass(rowData: DebitNote): string {
    if (rowData.approveid && rowData.approveid.length > 0) {
      return 'badge badge-light-success fw-bold px-4 py-3';
    }
    if (rowData.postflag === 'Cancel') {
      return '';
    }
    return 'badge badge-light-warning fw-bold px-4 py-3';
  }

  getStatusClassSmall(rowData: DebitNote): string {
    if (rowData.approveid && rowData.approveid.length > 0) {
      return 'badge badge-light-info me-2';
    }
    if (rowData.postflag === 'Cancel') {
      return '';
    }
    return 'badge badge-light-info me-2';
  }
/*
  getReport(id: string | undefined) {
    return this.http.get(`${this.directUrl}/gl/debitnote/pdf/${id}`, { responseType: 'arraybuffer' }).pipe(
      map((dt: ArrayBuffer) => {
        const pdfBlob = new Blob([dt], { type: 'application/pdf' });
        const unsafePdfUrl = URL.createObjectURL(pdfBlob);
        console.log(unsafePdfUrl);
        return this.sanitizer.bypassSecurityTrustResourceUrl(unsafePdfUrl);
      })
    );
  }*/

  getBlobPDF(id: string | undefined): Observable<Blob> {
    return this.http.get(`${this.directUrl}/gl/debitnote/pdf/${id}`, { responseType: 'blob' }).pipe(
      catchError((error) => {
        console.error('Error fetching PDF:', error);
        return throwError('Error fetching PDF'); // Handle error appropriately
      })
    );
  }
}

import { Component, OnInit } from '@angular/core';
import {
  BankData
} from "../../modules/setup/company/bank/bank-data";
import {
  DashboardService
} from "./dashboard.service";
import {
  BankDataOne
} from "../../modules/setup/company/bank/bank-data-one";
import {
  Observable
} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  //netProfitData: any; // Initialize with your initial chart data
  netProfitData$: Observable<any>;
  revenueData$: Observable<any>;
  invoiceData$: Observable<any>;

  constructor(private dashboardService: DashboardService) {}

  bankDataList: BankDataOne[] = [];



  ngOnInit(): void {
    this.fetchBankData();
    this.updateChartData();

  }

  updateChartData(): void {
    //this.netProfitData$ =  await this.dashboardService.getNetProfitData().toPromise();
    this.dashboardService.getNetProfitData().subscribe(
      (data: any) => {
        this.netProfitData$ = data;
      },
      (error: any) => {
        console.error('Error fetching net profit data:', error);
      }
    );

    this.dashboardService.getNetProfitData().subscribe(
      (data: any) => {
        this.revenueData$ = data;
      },
      (error: any) => {
        console.error('Error fetching net profit data:', error);
      }
    );

    this.dashboardService.getInvoiceData('AR').subscribe(
      (data: any) => {
        this.invoiceData$ = data;
        console.log(this.invoiceData$)
      },
      (error: any) => {
        console.error('Error fetching net profit data:', error);
      }
    );
  }

  getFormattedTitle(value : number) {
    return value.toLocaleString('en-MY', { style: 'currency', currency: 'MYR' });
  }

  async fetchBankData() {
    try {
      const byday = await this.dashboardService.getBankData().toPromise();
      if (byday !== null) {
        this.bankDataList = byday || [];
        // this.isLoading = false;
      } else {
        console.error('Error: Received null data from the server.');
        // Handle the case where meetingBook is null
      }
    } catch (error) {
      console.error('Error fetching events:', error);
      // Handle errors appropriately, e.g., display user-friendly messages
    }
  }

  /*async fetchBankData(): Promise<BankData[] | undefined> {
    try {
      const data = await this.dashboardService.getBankData().toPromise();
      if (data !== null) {
        return data;
      }
    } catch (error) {
      console.error('Error fetching events:', error);
      //return null;
    }
  }*/
}

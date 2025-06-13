import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { WidgetsModule } from '../../_metronic/partials';
import {
    ChartIncomeComponent
} from "./chart-income/chart-income.component";
import {
  ChartExpenseComponent
} from "./chart-expense/chart-expense.component";
import {
  ChartCashinoutComponent
} from "./chart-cashinout/chart-cashinout.component";
import {
  ChartInvoiceArComponent
} from "./chart-invoice-ar/chart-invoice-ar.component";
import {
  ChartInvoiceApComponent
} from "./chart-invoice-ap/chart-invoice-ap.component";
import {
    BankSummaryComponent
} from "./bank-summary/bank-summary.component";

@NgModule({
  declarations: [DashboardComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: DashboardComponent,
            },
        ]),
        WidgetsModule,
        ChartIncomeComponent,
        ChartExpenseComponent,
        ChartCashinoutComponent,
        ChartInvoiceArComponent,
        ChartInvoiceApComponent,
        BankSummaryComponent,
    ],
})
export class DashboardModule {}

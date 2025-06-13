import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule, Routes
} from "@angular/router";
import {
  FinancialComponent
} from "./financial.component";
import {
  GeneralLedgerComponent
} from "./general-ledger/general-ledger.component";




const routes: Routes = [
  {
    path: '',
    component: FinancialComponent,
    // children: [
    //   {
    //     path: 'calendar',
    //     component: MeetingCalendarComponent,
    //   },
    //   { path: '', redirectTo: 'overview', pathMatch: 'full' },
    //   { path: '**', redirectTo: 'overview', pathMatch: 'full' },
    // ],
  },
  {
    path: 'generalledger',
    loadChildren: () =>
      import('../financial/general-ledger/general-ledger.module').then((m) => m.GeneralLedgerModule),
  },
  {
    path: 'ar',
    loadChildren: () =>
      import('../financial/account-receivable/account-receivable.module').then((m) => m.AccountReceivableModule),
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FinancialRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  Routes
} from "@angular/router";
import {
  GeneralLedgerComponent
} from "../general-ledger/general-ledger.component";
import {
  DebitNoteComponent
} from "../general-ledger/debit-note/debit-note.component";
import {
  DebitNoteViewComponent
} from "../general-ledger/debit-note/debit-note-view/debit-note-view.component";
import {
  AccountReceivableComponent
} from "./account-receivable.component";
import {
  BuyerSummaryComponent
} from "./buyer-summary/buyer-summary.component";
import {
  BuyerSummaryViewComponent
} from "./buyer-summary/buyer-summary-view/buyer-summary-view.component";
import {
  ArInvoiceComponent
} from "./ar-invoice/ar-invoice.component";



const routes: Routes = [
  {
    path: '',
    component: AccountReceivableComponent,
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
    path: 'buyer-summary',
    component: BuyerSummaryComponent,
  },
  {
    path: 'buyer-summary/view-buyer/:id',
    component: BuyerSummaryViewComponent,
  },
  {
    path: 'invoice',
    component: ArInvoiceComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountReceivableRoutingModule { }

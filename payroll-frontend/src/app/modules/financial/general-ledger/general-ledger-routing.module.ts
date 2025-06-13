import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  Routes
} from "@angular/router";
import {
  FinancialComponent
} from "../financial.component";
import {
  GeneralLedgerComponent
} from "./general-ledger.component";
import {
  DebitNoteComponent
} from "./debit-note/debit-note.component";
import {
  DebitNoteViewComponent
} from "./debit-note/debit-note-view/debit-note-view.component";
import {
  BuyerSummaryViewComponent
} from "../account-receivable/buyer-summary/buyer-summary-view/buyer-summary-view.component";



const routes: Routes = [
  {
    path: '',
    component: GeneralLedgerComponent,
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
    path: 'debitnote',
    component: DebitNoteComponent,
  },
  {
    path: 'debitnote/view-debitnote/:id',
    component: DebitNoteViewComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralLedgerRoutingModule { }

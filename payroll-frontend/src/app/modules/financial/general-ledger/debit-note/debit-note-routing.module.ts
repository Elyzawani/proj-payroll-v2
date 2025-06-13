import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RouterModule,
  Routes
} from "@angular/router";
import {
  GeneralLedgerComponent
} from "../general-ledger.component";
import {
  DebitNoteComponent
} from "./debit-note.component";
import {
  DebitNoteViewComponent
} from "./debit-note-view/debit-note-view.component";



const routes: Routes = [
  {
    path: '',
    component: DebitNoteComponent,
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
    path: 'view-debitnote/:id',
    component: DebitNoteViewComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DebitNoteRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  GeneralLedgerRoutingModule
} from "./general-ledger-routing.module";
import {
  DebitNoteModule
} from "./debit-note/debit-note.module";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GeneralLedgerRoutingModule,
    DebitNoteModule
  ]
})
export class GeneralLedgerModule { }

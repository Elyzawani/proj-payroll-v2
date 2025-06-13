import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  DebitNoteTableComponent
} from "./debit-note-table/debit-note-table.component";
import {
  DebitNoteComponent
} from "./debit-note.component";
import {
  InlineSVGModule
} from "ng-inline-svg-2";
import {
  WidgetsModule
} from "../../../../_metronic/partials";
import {
  ToolbarModule
} from "primeng/toolbar";
import {
  TableModule
} from "primeng/table";
import {
  DebitNoteRoutingModule
} from "./debit-note-routing.module";
import {
    FormsModule
} from "@angular/forms";
import {
  CheckboxModule
} from "primeng/checkbox";



@NgModule({
  declarations: [
    DebitNoteComponent,
    DebitNoteTableComponent
  ],
  imports: [
    CommonModule,
    InlineSVGModule,
    WidgetsModule,
    ToolbarModule,
    TableModule,
    DebitNoteRoutingModule,
    FormsModule,
    CheckboxModule

  ]
})
export class DebitNoteModule { }

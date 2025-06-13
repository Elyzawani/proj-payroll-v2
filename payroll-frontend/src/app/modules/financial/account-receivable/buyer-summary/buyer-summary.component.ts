import {
  Component,
  OnInit, ViewChild
} from '@angular/core';
import {
  DecimalPipe, NgClass, NgIf
} from "@angular/common";
import {
  SharedModule
} from "primeng/api";
import {
  Table, TableLazyLoadEvent,
  TableModule
} from "primeng/table";
import {
  Subject,
  takeUntil
} from "rxjs";
import {
  SearchInputParameter
} from "../../../../class/search-input-parameter";
import {
  DebitnoteService
} from "../../../../services/modules/gl/debitnote.service";
import {
  Router
} from "@angular/router";
import {
  DebitNote
} from "../../../../class/modules/gl/debitnote";
import {
  InlineSVGModule
} from "ng-inline-svg-2";
import {
  BuyerSummaryTableComponent
} from "./buyer-summary-table/buyer-summary-table.component";

@Component({
  selector: 'app-buyer-summary',
  standalone: true,
  imports: [
    DecimalPipe,
    NgIf,
    SharedModule,
    TableModule,
    InlineSVGModule,
    NgClass,
    BuyerSummaryTableComponent
  ],
  templateUrl: './buyer-summary.component.html',
  styleUrl: './buyer-summary.component.scss'
})
export class BuyerSummaryComponent{
}

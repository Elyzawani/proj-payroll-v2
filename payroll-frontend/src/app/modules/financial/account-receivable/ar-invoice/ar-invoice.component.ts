import { Component } from '@angular/core';
import {
  ArInvoiceTableComponent
} from "./ar-invoice-table/ar-invoice-table.component";

@Component({
  selector: 'app-ar-invoice',
  standalone: true,
  imports: [
    ArInvoiceTableComponent
  ],
  templateUrl: './ar-invoice.component.html',
  styleUrl: './ar-invoice.component.scss'
})
export class ArInvoiceComponent {

}

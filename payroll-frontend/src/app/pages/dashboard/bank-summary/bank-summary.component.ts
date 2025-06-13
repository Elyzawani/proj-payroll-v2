import {
  Component,
  Input
} from '@angular/core';
import {
  NgClass
} from "@angular/common";
import {
  InlineSVGModule
} from "ng-inline-svg-2";

@Component({
  selector: 'app-bank-summary',
  standalone: true,
  imports: [
    NgClass,
    InlineSVGModule
  ],
  templateUrl: './bank-summary.component.html',
  styleUrl: './bank-summary.component.scss'
})
export class BankSummaryComponent {

  @Input() svgIcon = '';
  @Input() iconColor = '';
  @Input() color = '';
  @Input() description = '';
  @Input() title = '';

  constructor() {
  }

}

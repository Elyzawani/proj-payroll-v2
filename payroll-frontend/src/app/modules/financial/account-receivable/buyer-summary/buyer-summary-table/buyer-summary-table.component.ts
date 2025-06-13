import {
  Component,
  OnInit, ViewChild
} from '@angular/core';
import {
  Table,
  TableLazyLoadEvent,
  TableModule
} from "primeng/table";
import {
  Subject,
  takeUntil
} from "rxjs";
import {
  SearchInputParameter
} from "../../../../../class/search-input-parameter";
import {
  DebitnoteService
} from "../../../../../services/modules/gl/debitnote.service";
import {
  Router
} from "@angular/router";
import {
  DebitNote
} from "../../../../../class/modules/gl/debitnote";
import {
  InlineSVGModule
} from "ng-inline-svg-2";
import {
  DecimalPipe,
  NgClass
} from "@angular/common";
import {
  BuyerSummaryService
} from "../buyer-summary.service";
import {
  BuyerInfo
} from "../../../../setup/configuration/buyer/buyer-info";

@Component({
  selector: 'app-buyer-summary-table',
  standalone: true,
  imports: [
    InlineSVGModule,
    NgClass,
    TableModule,
    DecimalPipe
  ],
  templateUrl: './buyer-summary-table.component.html',
  styleUrl: './buyer-summary-table.component.scss'
})
export class BuyerSummaryTableComponent implements OnInit {

  loading: boolean = false;
  @ViewChild('dt')
  dt!: Table;
  unsubscribe$: Subject<void> = new Subject<void>();

  isLoading: boolean = true;
  datatable: any[] = [];

  searchInput: SearchInputParameter = {
    pageNumber: 1,
    pageSize: 10,
    sortColumn: '...',
    sortDirection: '...',
    searchInput: '...'
  };
  results: any[] = [];
  count: number = 0;


  constructor(private buyerService: BuyerSummaryService, private router: Router) {
  }

  listData: BuyerInfo[] = [];
  totalRecords: number = 0;

  ngOnInit(): void {
    //this.fetchData();
  }

  reloadList(event: TableLazyLoadEvent) {
    this.loading = true;
    event = event || {}; // Set event to an empty object if it's null or undefined
    const {
      first = 0,
      rows = 10,
      sortField = 'code',
      sortOrder = 2,
      globalFilter = ''
    } = event;
    this.buyerService.getFilteredList({
      first,
      rows,
      sortField,
      sortOrder,
      globalFilter
    })
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: any) => {
        this.listData = res.content;
        this.totalRecords = res.totalElements;
        this.loading = false;
      });
  }



  getStatusClass(rowData: DebitNote): string {
    if (rowData.approveid && rowData.approveid.length > 0) {
      return 'badge badge-light-success fw-bold px-4 py-3';
    }
    if (rowData.postflag === 'Cancel') {
      return '';
    }
    return 'badge badge-light-warning fw-bold px-4 py-3';
  }

  search(): void {
    this.buyerService.searchAllDT(this.searchInput).subscribe(response => {
      this.results = response.results;
      this.count = response.count;
    });
  }

  navigateToOtherPage(itemId: string) {
    // Navigate to the desired page using the router.navigate method
    //this.router.navigate(['/view-debitnote', itemId]);
    console.log(itemId);
    this.router.navigate(['/modules/financial/ar/buyer-summary/view-buyer', itemId]);
  }

}

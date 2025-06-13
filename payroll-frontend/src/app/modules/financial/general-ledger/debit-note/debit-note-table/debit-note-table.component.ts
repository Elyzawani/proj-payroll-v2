import {
  ChangeDetectorRef,
  Component,
  ViewChild,
  OnInit
} from '@angular/core';
import {
  DebitnoteService
} from "../../../../../services/modules/gl/debitnote.service";
import {
  DebitNote
} from "../../../../../class/modules/gl/debitnote";
import {
  SearchInputParameter
} from "../../../../../class/search-input-parameter";
import {
  LazyLoadEvent
} from "primeng/api";
import {
  Subject,
  takeUntil
} from "rxjs";
import {
  Table, TableLazyLoadEvent
} from "primeng/table";
import {
  Router
} from "@angular/router";

@Component({
  selector: 'app-debit-note-table',
  templateUrl: './debit-note-table.component.html',
  styleUrl: './debit-note-table.component.scss'
})
export class DebitNoteTableComponent implements OnInit{

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



  constructor(private debitNoteService: DebitnoteService, private router: Router) {
  }

  listData: DebitNote[] = [];
  totalRecords: number = 0;

  selectAll: boolean = false;


  selectAllRows(event: any) {
    this.listData.forEach(row => {
      //row.selected = event.checked;
    });
  }

  ngOnInit(): void {
    //this.fetchData();

  }

  reloadList(event: TableLazyLoadEvent) {
    this.loading = true;
    event = event || {}; // Set event to an empty object if it's null or undefined
    const { first = 0, rows = 10, sortField = 'notedate', sortOrder = 2, globalFilter = '' } = event;
    this.debitNoteService.getFilteredList({ first, rows, sortField, sortOrder, globalFilter })
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((res: any) => {
        this.listData = res.content;
        this.totalRecords = res.totalElements;
        this.loading = false;
      });

    this.listData = this.listData.map(item => ({
      ...item,
      selected: false // Initialize selected property
    }));
  }



  search(): void {
    this.debitNoteService.searchAllDT(this.searchInput).subscribe(response => {
      this.results = response.results;
      this.count = response.count;
    });
  }

  navigateToOtherPage(itemId: string) {
    // Navigate to the desired page using the router.navigate method
    //this.router.navigate(['/view-debitnote', itemId]);
    console.log(itemId);
    this.router.navigate(['/modules/financial/generalledger/debitnote/view-debitnote', itemId]);
  }

  getStatusClass(rowData: DebitNote) {
    try {
      // Call the service method to get the data
      const statusClass = this.debitNoteService.getStatusClass(rowData);
      return statusClass;

    } catch (error) {
      console.error('Error fetching events:', error);
      return 'n/a';
      // Handle errors appropriately, e.g., display user-friendly messages
    }
  }

  getStatusLabel(rowData: DebitNote) {
    try {
      // Call the service method to get the data
      const statusLabel = this.debitNoteService.getStatusLabel(rowData);
      return statusLabel;

    } catch (error) {
      console.error('Error fetching events:', error);
      return 'n/a';
      // Handle errors appropriately, e.g., display user-friendly messages
    }
  }

}

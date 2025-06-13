import {
  Component, Input,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from "@angular/router";
import {
  BuyerSummaryService
} from "../../../account-receivable/buyer-summary/buyer-summary.service";
import {
  DebitnoteService
} from "../../../../../services/modules/gl/debitnote.service";
import {
  BuyerInfo
} from "../../../../setup/configuration/buyer/buyer-info";
import {
  DebitNote
} from "../../../../../class/modules/gl/debitnote";
import {
  DecimalPipe,
  NgClass, NgForOf
} from "@angular/common";
import {
  PdfModalComponent
} from "../pdf-modal/pdf-modal.component";
import {
  Subject,
  takeUntil
} from "rxjs";
import {
  SafeResourceUrl
} from "@angular/platform-browser";
import {
  DialogModule
} from "primeng/dialog";

@Component({
  selector: 'app-debit-note-view',
  standalone: true,
  imports: [
    NgClass,
    DecimalPipe,
    NgForOf,
    PdfModalComponent,
    DialogModule
  ],
  templateUrl: './debit-note-view.component.html',
  styleUrl: './debit-note-view.component.scss'
})
export class DebitNoteViewComponent implements OnInit{

  debitNote: DebitNote | null;
  displayModal: boolean = false;
  //pdfSrc: SafeResourceUrl | undefined;
  pdfSrc: string | ArrayBuffer | Uint8Array | undefined;
  unsubscribe$: Subject<void> = new Subject<void>();
  pdfUrl: SafeResourceUrl | undefined;
  @Input() display: boolean = false;

  constructor(private route: ActivatedRoute, private debitNoteService: DebitnoteService) { }

  ngOnInit(): void {
    // Subscribe to route parameter changes
    this.route.params.subscribe(params => {
      // Access parameters using params object
      const id = params['id']; // Assuming 'id' is the parameter name
      // Do something with the parameter value
      console.log('Received parameter:', id);
      this.fetchById(id);

    });


  }

  /*viewPDF(id: string | undefined): void {
    if (!id) return; // Ensure ID is provided

    this.debitNoteService.getReport(id).pipe(takeUntil(this.unsubscribe$)).subscribe({
      next: dt => {
        console.log('pdf string', dt);
        // Assuming dt is a URL string pointing to the PDF file
        this.pdfSrc = dt;
        console.log(this.pdfSrc);
      },
      error: err => {
        console.error('Error fetching PDF:', err);
      }
    });
  }*/

  openPdfModal(id: string | undefined) {
    console.log('Opening PDF modal');
    this.displayModal = true; // Set displayModal to true to open the modal
    this.pdfSrc = undefined; // Reset any previous PDF source
    this.showDialogWithPDF(id); // Fetch the new PDF and open the dialog
  }

  showDialogWithPDF(id: string | undefined): void {
    if (!id) return; // Ensure ID is provided

    this.debitNoteService.getBlobPDF(id).subscribe({
      next: (blob: Blob) => {
        const url = URL.createObjectURL(blob);
        this.pdfSrc = url; // Set the new PDF source
      },
      error: (error) => {
        console.error('Error fetching PDF:', error);
      }
    });
  }




  async fetchById(id: String) {
    try {
      // Call the service method to get the data
      const data = await this.debitNoteService.getDetailbyID(id).toPromise();
      if (data !== null) {
        this.debitNote = data || null;
        console.log(this.debitNote?.itemdebitnoteList[0].descp);
        // this.isLoading = false;
        // this.loading = false;
      } else {
        console.error('Error: Received null data from the server.');
        // Handle the case where meetingBook is null
      }
    } catch (error) {
      console.error('Error fetching events:', error);
      // Handle errors appropriately, e.g., display user-friendly messages
    }
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

  getStatusClassSmall(rowData: DebitNote) {
    try {
      // Call the service method to get the data
      const statusClass = this.debitNoteService.getStatusClassSmall(rowData);
      return statusClass;

    } catch (error) {
      console.error('Error fetching events:', error);
      return 'n/a';
      // Handle errors appropriately, e.g., display user-friendly messages
    }
  }

  // openPdfModal(id: string | undefined) {
  //   console.log('modal pdf')
  //   console.log(this.displayModal)
  //   this.displayModal = true;
  //   this.showDialogWithPDF(id);
  // }


}

import {
  Component,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from "@angular/router";
import {
  BuyerSummaryService
} from "../buyer-summary.service";
import {
  BuyerInfo
} from "../../../../setup/configuration/buyer/buyer-info";
import {
  BuyerPaymentComponent
} from "../buyer-payment/buyer-payment.component";
import {
  BuyerInvoiceComponent
} from "../buyer-invoice/buyer-invoice.component";

@Component({
  selector: 'app-buyer-summary-view',
  standalone: true,
  imports: [
    BuyerPaymentComponent,
    BuyerInvoiceComponent
  ],
  templateUrl: './buyer-summary-view.component.html',
  styleUrl: './buyer-summary-view.component.scss'
})
export class BuyerSummaryViewComponent implements OnInit{

  buyerInfo: BuyerInfo | null;

  constructor(private route: ActivatedRoute, private buyerService: BuyerSummaryService) { }

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

  async fetchById(id: String) {
    try {
      // Call the service method to get the data
      const buyer = await this.buyerService.getBuyerbyID(id).toPromise();
      if (buyer !== null) {
        this.buyerInfo = buyer || null;
        console.log(this.buyerInfo);
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

}

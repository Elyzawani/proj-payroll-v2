import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NavigationCancel, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  DrawerComponent,
  MenuComponent,
  ScrollComponent,
  ToggleComponent,
} from 'src/app/_metronic/kt/components';
import { environment } from '../../../../../../../environments/environment';
import {
  ModuleListService
} from "./module-list.service";
import {
  BankDataOne
} from "../../../../../../modules/setup/company/bank/bank-data-one";
import {
  ModuleCategory
} from "./module-category";

@Component({
  selector: 'app-menu-tab',
  templateUrl: './menu-tab.component.html',
  styleUrls: ['./menu-tab.component.scss'],
})
export class MenuTabComponent implements OnInit, OnDestroy {
  // appAngularVersion: string = environment.appVersion;
  // appPreviewChangelogUrl: string = environment.appPreviewChangelogUrl;
  @ViewChild('ktAsideScroll', { static: true }) ktAsideScroll: ElementRef;
  private unsubscribe: Subscription[] = [];

  constructor(private router: Router, private module: ModuleListService) {}

  moduleDataList: ModuleCategory[] = [];

  ngOnInit(): void {
    this.routingChanges();
    this.fetchModule();
  }

  routingChanges() {
    const routerSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
        this.menuReinitialization();
      }
    });
    console.log('routing')
    console.log(routerSubscription)
    this.unsubscribe.push(routerSubscription);
  }

  menuReinitialization() {
    setTimeout(() => {
      MenuComponent.reinitialization();
      DrawerComponent.reinitialization();
      ToggleComponent.reinitialization();
      ScrollComponent.reinitialization();
      if (this.ktAsideScroll && this.ktAsideScroll.nativeElement) {
        this.ktAsideScroll.nativeElement.scrollTop = 0;
      }
    }, 50);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }

  async fetchModule() {
    try {
      const byday = await this.module.getModule().toPromise();
      if (byday !== null) {
        this.moduleDataList = byday || [];
        // this.isLoading = false;
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

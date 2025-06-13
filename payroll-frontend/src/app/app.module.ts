import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule
} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ClipboardModule } from 'ngx-clipboard';
import { TranslateModule } from '@ngx-translate/core';
import { InlineSVGModule } from 'ng-inline-svg-2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './modules/auth/services/auth.service';
import { environment } from 'src/environments/environment';
// #fake-start#
import { FakeAPIService } from './_fake/fake-api.service';
import { FinancialComponent } from './modules/financial/financial.component';
import { GeneralLedgerComponent } from './modules/financial/general-ledger/general-ledger.component';
import { DebitNoteComponent } from './modules/financial/general-ledger/debit-note/debit-note.component';
import { FinancialRoutingModule } from './modules/financial/financial-routing.module';
import {
  AngularFireModule
} from "@angular/fire/compat";
import {
  AngularFirestoreModule
} from "@angular/fire/compat/firestore";
import {
  NgxDatatableModule
} from "@swimlane/ngx-datatable";
import {
  FullCalendarModule
} from "@fullcalendar/angular";
import {
  ToastrModule
} from "ngx-toastr";
import {
  FlatpickrModule
} from "angularx-flatpickr";
import {
  DatePipe,
  HashLocationStrategy,
  LocationStrategy
} from "@angular/common";
import {
  AngularFireAuthModule
} from "@angular/fire/compat/auth";
import {
  ApiKeyInterceptor
} from "./core/api-key-interceptor.service";
import {
  UserService
} from "./services/user.service";
import {
  GoogleauthComponent
} from "./googleauth/googleauth.component";
import { GeneralLedgerRoutingModule } from './modules/financial/general-ledger/general-ledger-routing.module';
import {
  FinancialModule
} from "./modules/financial/financial.module";
import { DebitNoteRoutingModule } from './modules/financial/general-ledger/debit-note/debit-note-routing.module';
import { AccountReceivableRoutingModule } from './modules/financial/account-receivable/account-receivable-routing.module';
import {
  PdfViewerModule
} from "ng2-pdf-viewer";
// #fake-end#

function appInitializer(authService: AuthService) {
  return () => {
    return new Promise((resolve) => {
      //@ts-ignore
      authService.getUserByToken().subscribe().add(resolve);
    });
  };
}

@NgModule({
  declarations: [AppComponent, GoogleauthComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    HttpClientModule,
    ClipboardModule,
    // #fake-start#
    environment.isMockEnabled
      ? HttpClientInMemoryWebApiModule.forRoot(FakeAPIService, {
        passThruUnknownUrl: true,
        dataEncapsulation: false,
      })
      : [],
    // #fake-end#
    AppRoutingModule,
    InlineSVGModule.forRoot(),
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    NgxDatatableModule,
    FullCalendarModule,
    ToastrModule.forRoot(),
    FinancialRoutingModule,
    FlatpickrModule.forRoot(),
    GeneralLedgerRoutingModule,
    FinancialModule,
    DebitNoteRoutingModule,
    AccountReceivableRoutingModule,
    PdfViewerModule
  ],
  providers: [
    DatePipe,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: appInitializer,
    //   multi: true,
    //   deps: [GoogleAuthService],
    // },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiKeyInterceptor,
      multi: true,
    },
    UserService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

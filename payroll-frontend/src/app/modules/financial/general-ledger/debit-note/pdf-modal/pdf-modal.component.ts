import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { DialogModule } from "primeng/dialog";
import { PdfViewerComponent, PdfViewerModule } from "ng2-pdf-viewer";
import { SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: 'app-pdf-modal',
  standalone: true,
  imports: [
    DialogModule,
    PdfViewerModule
  ],
  templateUrl: './pdf-modal.component.html',
  styleUrl: './pdf-modal.component.scss'
})
export class PdfModalComponent {

  @Input() display: boolean = false;
  @Input() pdfSrc: SafeResourceUrl | undefined;
  @ViewChild(PdfViewerComponent, { static: false }) pdfViewer: PdfViewerComponent;

  constructor() {}

  printPDF() {
    const url = this.pdfSrc ? this.pdfSrc.toString() : undefined;
    if (url) {
      const pdfWindow = window.open(url, '_blank');
      if (pdfWindow) {
        pdfWindow.onload = () => {
          pdfWindow.print();
        };
      }
    }
  }
}

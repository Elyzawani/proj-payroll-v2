export class InvoiceData {
  draft: number;
  overdue: number;
  await: number;
  total: number;
  type: string;

  constructor(data: any) {
    this.draft = data.draft || 0.0;
    this.overdue = data.overdue || 0.0;
    this.await = data.await || 0.0;
    this.total = data.total || 0.0;
    this.type = data.type || '';
  }
}


export interface BankDataOne {
  bank: string;
  code: string;
  monthval: number;
}

export class BankDataResponse {
  data: BankDataOne[];

  constructor(data: BankDataOne[]) {
    this.data = data;
  }
}

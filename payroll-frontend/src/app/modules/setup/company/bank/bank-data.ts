export interface MonthValue {
  total: number;
  month: number;
  thismonthtotal?: number;
  thismonth?: number;
}

export interface BankData {
  bank: string;
  code: string;
  monthval: MonthValue[];
}

export class BankDataResponse {
  data: BankData[];

  constructor(data: BankData[]) {
    this.data = data;
  }
}

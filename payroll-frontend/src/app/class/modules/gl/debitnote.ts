export class DebitNote {
  noteno: string;
  notedate: string;
  year: string;
  period: string;
  acccode: string;
  accdesc: string;
  estcode: string;
  estname: string;
  cttype: string;
  ctcode: string;
  ctdesc: string;
  remark: string;
  total: number;
  postflag: string;
  postdate: string | null;
  topost: string;
  prepareid: string;
  preparename: string;
  preparedate: string;
  approveid: string;
  approvename: string;
  approvedesig: string;
  approvedate: string;
  receivercode: string;
  receivername: string;
  satype: string;
  sacode: string;
  sadesc: string;
  refernoteno: string;
  id: number;
  accdebitList: AccDebit[];
  itemdebitnoteList: ItemDebitNote[];
}

export class AccDebit {
  acccode: string;
  accdesc: string;
  loclevel: string;
  loccode: string;
  locdesc: string;
  cttype: string;
  ctcode: string;
  ctdesc: string;
  remark: string;
  amount: number;
  refer: number;
  satype: string;
  sacode: string;
  sadesc: string;
}

export class ItemDebitNote {
  descp: string;
  quantity: number;
  unitprice: number;
  amount: number;
  date: string;
  refer: number;
  reference: string;
  unitmeasure: string;
}

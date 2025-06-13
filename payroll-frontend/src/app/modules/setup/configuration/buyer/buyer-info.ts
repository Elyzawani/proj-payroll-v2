export class BuyerInfo {
  code: string;
  vendor: string;
  codemill: string;
  companyname: string;
  coregister: string;
  bumiputra: string;
  porla: string;
  mill: string;
  coa: string;
  coadescp: string;
  person: string;
  title: string;
  position: string;
  hp: string;
  address: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  phone: string;
  fax: string;
  email: string;
  url: string;
  remarks: string;
  gstid: string;
  paymentterm: string;
  taxinvoicetype: string;

  constructor(
    code: string,
    vendor: string,
    codemill: string,
    companyname: string,
    coregister: string,
    bumiputra: string,
    porla: string,
    mill: string,
    coa: string,
    coadescp: string,
    person: string,
    title: string,
    position: string,
    hp: string,
    address: string,
    city: string,
    state: string,
    postcode: string,
    country: string,
    phone: string,
    fax: string,
    email: string,
    url: string,
    remarks: string,
    gstid: string,
    paymentterm: string,
    taxinvoicetype: string
  ) {
    this.code = code;
    this.vendor = vendor;
    this.codemill = codemill;
    this.companyname = companyname;
    this.coregister = coregister;
    this.bumiputra = bumiputra;
    this.porla = porla;
    this.mill = mill;
    this.coa = coa;
    this.coadescp = coadescp;
    this.person = person;
    this.title = title;
    this.position = position;
    this.hp = hp;
    this.address = address;
    this.city = city;
    this.state = state;
    this.postcode = postcode;
    this.country = country;
    this.phone = phone;
    this.fax = fax;
    this.email = email;
    this.url = url;
    this.remarks = remarks;
    this.gstid = gstid;
    this.paymentterm = paymentterm;
    this.taxinvoicetype = taxinvoicetype;
  }
}

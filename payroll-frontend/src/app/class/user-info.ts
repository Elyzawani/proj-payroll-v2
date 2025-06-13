export class UserInfo {
  userLevel: number;
  coStaff: CoStaff;
  staffDetail: StaffDetail;
  children: Child[];
  spouse: Spouse[];
  acknow: any; // You can replace `any` with a specific type if you know the structure

  constructor(data: any) {
    this.userLevel = data.userLevel;
    this.coStaff = new CoStaff(data.coStaff);
    this.staffDetail = new StaffDetail(data.staffDetail);
    // Check if data.children is an array before mapping over it
    this.children = Array.isArray(data.children) ? data.children.map((child: any) => new Child(child)) : [];
    // Check if data.spouse is an array before mapping over it
    this.spouse = Array.isArray(data.spouse) ? data.spouse.map((spouse: any) => new Spouse(spouse)) : [];
    this.acknow = data.acknow;
  }
}

export class CoStaff {
  id: number;
  staffid: string;
  title: string | null;
  name: string;
  status: string;
  ic: string;
  birth: string;
  sex: string;
  marital: string;
  religion: string;
  citizen: string;
  address: string;
  city: string;
  state: string;
  postcode: string;
  phone: string;
  hp: string;
  fax: string;
  email: string;
  pposition: string;
  remarks: string;
  race: string;
  flag: string;
  category: string;
  workertype: string;
  oldic: string;
  datejoin: string;
  pobirth: string;
  department: string;
  position: string;
  location: string;
  imageUrl: string;
  departmentId: string;
  locId: string;
  postId: string;

  constructor(data: any) {
    Object.assign(this, data);
  }
}

export class StaffDetail {
  id: number;
  dob: string;
  nokp: string;
  birthplace: string;
  marital: string;
  blood: string;
  department: string;
  address: string;
  fixaddress: string;
  race: string;
  religion: string;
  taxno: string;
  noepf: string;
  nosocso: string;
  position: string;
  workdate: string;
  spouse: string | null;
  nokpspouse: string | null;
  spousework: string;
  namawaris1: string;
  hubunganwaris1: string;
  notelwaris1: string;
  alamatwaris1: string;
  namawaris2: string;
  hubunganwaris2: string;
  notelwaris2: string;
  alamatwaris2: string;
  bilanak: number;
  anakover18: number;
  anakbelow18: number;
  anakipt18: number;
  anakoku: number;
  anakokuipt: number;
  staffid: string;
  educationlevel: string;
  bank: string;
  noakaun: string;

  constructor(data: any) {
    Object.assign(this, data);
  }
}

export class Child {
  id: number;
  staffid: string;
  namaanak: string;
  nokpanak: string;
  umur: number;
  oku: string;
  educationlevel: string;
  marital: string;
  working: boolean;

  constructor(data: any) {
    Object.assign(this, data);
  }
}

export class Spouse {
  id: number;
  namespouse: string;
  nokpspouse: string;
  spousework: string;
  staffid: string;

  constructor(data: any) {
    Object.assign(this, data);
  }
}


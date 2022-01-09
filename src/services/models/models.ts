export interface User {
  id: number;
  email: string;
  password: string;
  numberPerPage: number;
  token: string;
}
export interface Order {
  productName: string;
  itemCost: number;
}
export interface State {
  abbreviation: string;
  name: string;
}
export interface Customer {
  id: number;
  firstName: string;
  lastName: string;
  gender: string;
  address: string;
  city: string;
  state: State;
  orders: Order[];
  latitude: number;
  longitude: number;
  orderTotal: number;
}

export interface CustomersByPage {
  results: Customer[];
  totalRecords: number;
}

export interface Product {
  id?:string;
  name:string;
  category:string;
  size:string;
  price:number;
  stock:number;
  model:string;
  cuantity:number;
  createdAt?:Date;
  updatedAt?:Date;
}

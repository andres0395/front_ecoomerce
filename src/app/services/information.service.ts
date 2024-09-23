import { Injectable, signal, Signal } from "@angular/core";
import { Product } from "../interfaces/product.interface";
// cCDa+fZy6jY?($6
@Injectable({
  providedIn:'root'
})
export class InformationService{
  private products= signal<Product[]>([]);
  private productsFilter= signal<Product[]>([]);
  private productsCar = signal<Product[]>([]);
  private categorie = signal<string>('Todas');
  getProducts(){
    if(this.categorie() != 'Todas'){
      this.products.set(
        this.productsFilter().filter(e=>e.category == this.categorie())
      )
      return this.products;
    }
    this.products.set(this.productsFilter())
    return this.products;
  }
  setProducts(products:Signal<Product[]>){
    this.productsFilter.set(products());
  }
  getCar(){
    return this.productsCar;
  }
  setCar(car:Product,action='add'){
    if(action=='add'){
      this.productsCar().push(car);
    }
    else{
      const id = this.productsCar().findIndex(p => p.id === action);
      this.productsCar().splice(id, 1);
    }
  }
  getCategorie(){
    return this.categorie;
  }
  setCategorie(categorie:string){
    this.categorie.set(categorie);
  }
}

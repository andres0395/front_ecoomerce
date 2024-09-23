import { Component, inject, OnInit, Signal } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { InformationService } from '../../services/information.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export default class DashboardComponent implements OnInit {
  products!:Signal<Product[] | Object| any>;
  categorie!:Signal<string>;
  private informationService = inject(InformationService);

  ngOnInit(): void {
    this.products = this.informationService.getProducts();
    this.categorie = this.informationService.getCategorie();
  }
  isNumber(val:any, item:any) {
    if(val.value){
      val.value = val.value.replace(/[^0-9]/g, '');
      item.cuantity = val.value;
    }else{
      item.cuantity = 0;
    }
  }
  addornotProduct(item:Product, val='-'){
    if(val){
      item.cuantity--;
      this.informationService.setCar(item,item.id);
    }
    else{
      item.cuantity ++;
      this.informationService.setCar(item);
    }
  };
}

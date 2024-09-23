import { Component, effect, inject, Injector, Signal } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { InformationService } from '../../services/information.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  products!:Signal<Product[] | Object| any>;
  categories:string[] | any[] = [];
  private informationService = inject(InformationService);
  private injector = inject(Injector);
  ngOnInit(): void {
    this.products = this.informationService.getProducts();
    effect(()=>{
      if(this.products().length){
        ;
        this.categories = [
          ... new Set(
            this.products().reduce((acc:String[],product:Product)=>{
              acc.push(product.category);
              return acc;
            },[])
          )
        ]
        this.categories.unshift('Todas')
      }
    },{injector:this.injector})
  }
  selectCategorie(categorie:string){
    this.informationService.setCategorie(categorie);
    this.informationService.getProducts();
  }
}

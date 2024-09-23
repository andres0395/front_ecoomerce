import { Component, inject, OnInit, Signal } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { InformationService } from '../../services/information.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  producCar!:Signal<Product[]>
  private information = inject(InformationService);

  ngOnInit(): void {
    this.producCar =this.information.getCar();
  }
}

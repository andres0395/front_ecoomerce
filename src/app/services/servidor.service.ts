import { inject, Injectable, Injector } from "@angular/core";
import { Product } from "../interfaces/product.interface";
import { toSignal } from '@angular/core/rxjs-interop'
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ServidorService {
  private readonly url = 'http://localhost:3000/';
  private injector = inject(Injector);
  private http = inject(HttpClient);

  getProduts():Product[] | Object | any{
    return toSignal(this.http.get(this.url+'products'),{initialValue:[],injector:this.injector});
  }
}

import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FlowbiteService } from './services/flowbite.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ServidorService } from './services/servidor.service';
import { InformationService } from './services/information.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front_ecoomerce';
  private flowbiteService = inject(FlowbiteService);
  private servidor = inject(ServidorService);
  private information = inject(InformationService);
  ngOnInit(): void {
    this.flowbiteService.loadFlowbite(flowbite => {
      console.log('loaded');
    });
    this.information.setProducts(this.servidor.getProduts());
  }
}

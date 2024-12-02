import { Component, ElementRef, ViewChild } from '@angular/core';
import { RichiestePagamentoComponent } from './richieste-pagamento/richieste-pagamento.component';
import { SidebarService } from '../../services/sidebar-service/sidebar.service';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RichiestePagamentoComponent, CommonModule, DividerModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  @ViewChild('box1') box1!:  ElementRef<HTMLDivElement>
  @ViewChild('box2') box2!:  ElementRef<HTMLDivElement>
  @ViewChild('box3') box3!:  ElementRef<HTMLDivElement>
  state_fullscreen_b1: boolean = false
  state_fullscreen_b2: boolean = false
  state_fullscreen_b3: boolean = false
  constructor(private sidebarService: SidebarService) {}

  // hideSidebar(scelta: 1|2|3) {
  //   if(scelta == 1){
  //     this.state_fullscreen_b1 = true

  //   }
  //   if(scelta == 2){
  //     this.state_fullscreen_b2 = true
  //   }
  //   if(scelta == 3){
  //     this.state_fullscreen_b3 = true
  //   }

  //   this.sidebarService.setVisibility(false); // Aggiorna lo stato globale
  // }
  showSidebar(){
    this.sidebarService.setVisibility(true); // Aggiorna lo stato globale
    this.state_fullscreen_b1 = false
    this.state_fullscreen_b2 = false
    this.state_fullscreen_b3 = false
    this.box1.nativeElement.scrollTo({ top: 0, behavior: 'smooth' });
    this.box2.nativeElement.scrollTo({ top: 0, behavior: 'smooth' });
    this.box3.nativeElement.scrollTo({ top: 0, behavior: 'smooth' });

  }
  apriNotifica(IUV: string){

  }
  // apriFileFR(IUV: string){
  //   // this.showSidebar()
  //   // this.hideSidebar(1)
    
  // }

}

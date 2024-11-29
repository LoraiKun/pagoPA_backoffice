import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TabellaRichiesteComponent } from './tabella-richieste/tabella-richieste.component';
import { Filtro } from '../../models/pagamenti';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { RendicontazioneService } from '../../services/rendicontazione/rendicontazione.service';

@Component({
  selector: 'app-ricerca-pagamento',
  standalone: true,
  imports: [ButtonModule, TabellaRichiesteComponent, ReactiveFormsModule],
  templateUrl: './ricerca-pagamento.component.html',
  styleUrl: './ricerca-pagamento.component.css',
})
export class RicercaPagamentoComponent {
  filtro: Filtro = {
    filtroMail: '',
    filtroIUV: '',
    filtroEnte: '',
    filtroCF_PI: '',
  };
  filterForm!: FormGroup;
  constructor(private rendService: RendicontazioneService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.filterForm = new FormGroup({
      filterIUV: new FormControl(''),
      filterEnte: new FormControl(''),
      filterCF: new FormControl(''),
      filterEmail: new FormControl(''),
    });
  }
  submit(tipo: 'cf/pi' | 'IUV' | 'ente' | 'email') {
    switch (tipo) {
      case 'IUV': {
        if (this.filterForm.get('filterIUV')?.value)
          this.filtro.filtroIUV = this.filterForm.get('filterIUV')?.value;
        break;
      }
      case 'cf/pi': {
        if (this.filterForm.get('filterCF')?.value)
          this.filtro.filtroCF_PI = this.filterForm.get('filterCF')?.value;
        break;
      }
      case 'ente': {
        if (this.filterForm.get('filterEnte')?.value)
          this.filtro.filtroEnte = this.filterForm.get('filterEnte')?.value;
        break;
      }
      case 'email':
        {
          if (this.filterForm.get('filterEmail')?.value)
            this.filtro.filtroMail = this.filterForm.get('filterEmail')?.value;
          break;
        }
    }
    this.rendService.updateFiltro(this.filtro);
  }
}

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
  filtro!: Filtro|null;
  filterForm!: FormGroup;
  constructor (private rendService: RendicontazioneService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.filterForm = new FormGroup({
      filter: new FormControl(''),
    });
  }
  submit(tipo: 'email' | 'IUV' | 'ente') {
    this.filtro = {tipo: tipo, filtro: this.filterForm.get('filter')?.value}
    this.rendService.updateFiltro(this.filtro)
  }
}

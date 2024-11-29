import { Component, Input } from '@angular/core';
import { RisultatiRichiestaPagamento } from '../../../models/pagamenti';
import { TabellaNotificheComponent } from '../../../components/tabella-notifiche/tabella-notifiche.component';

@Component({
  selector: 'app-dettagli',
  standalone: true,
  imports: [TabellaNotificheComponent],
  templateUrl: './dettagli.component.html',
  styleUrl: './dettagli.component.css'
})
export class DettagliComponent {
  @Input() dati!: RisultatiRichiestaPagamento|null
}

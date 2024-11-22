import { Component } from '@angular/core';
import { RichiestePagamentoComponent } from './richieste-pagamento/richieste-pagamento.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RichiestePagamentoComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}

import { Component } from '@angular/core';
import { RichiesteDiPagamento } from '../../../models/pagamenti';
import { TableModule } from 'primeng/table';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-richieste-pagamento',
  standalone: true,
  imports: [TableModule],
  templateUrl: './richieste-pagamento.component.html',
  styleUrl: './richieste-pagamento.component.css',
})
export class RichiestePagamentoComponent {
  richiestePagamento!: RichiesteDiPagamento
  constructor(private http: HttpClient){
    http.get<RichiesteDiPagamento>('assets/json/richieste_di_pagamento.json').subscribe({
      next: (res) =>{
        this.richiestePagamento = res
      }
    })
  }
}

import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import {
  Filtro,
  RichiesteDiPagamento,
  RisultatiRichieste,
} from '../../../models/pagamenti';
import { HttpClient } from '@angular/common/http';
import { RendicontazioneService } from '../../../services/rendicontazione/rendicontazione.service';

@Component({
  selector: 'app-tabella-richieste',
  standalone: true,
  imports: [TableModule, CommonModule, PaginatorModule],
  templateUrl: './tabella-richieste.component.html',
  styleUrl: './tabella-richieste.component.css',
})
export class TabellaRichiesteComponent {

  richiestePagamento: RisultatiRichieste[] = [];
  filteredRichiestePagamento: RisultatiRichieste[] = [];
  filtro!: Filtro;
  constructor(private http: HttpClient,private rendService: RendicontazioneService) {
    http
      .get<RichiesteDiPagamento>('assets/json/richieste_di_pagamento.json')
      .subscribe({
        next: (res) => {
          res.risultati.forEach((richiesta) => {
          });
          this.richiestePagamento = res.risultati;
          this.filtraRichieste()
        },
      });
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.rendService.filtro$.subscribe(value => {
      this.filtro = value
      this.filtraRichieste()
    })
  }

  filtraRichieste(): void {
    const { tipo, filtro } = this.filtro;
    if (!filtro.trim()) {
      console.log('dentro chiusura', this.filtro)
      // Se il filtro è vuoto, mostra tutte le richieste
      this.filteredRichiestePagamento = this.richiestePagamento;
      return;
    }

    this.filteredRichiestePagamento = this.richiestePagamento.filter((richiesta) => {
      switch (tipo) {
        case 'IUV':
          return richiesta.pendenza.numeroAvviso.toString().includes(filtro);
        case 'ente':
          return richiesta.pendenza.dominio.ragioneSociale
            .toLowerCase()
            .includes(filtro.toLowerCase());
        case 'email':
          return richiesta.pendenza.soggettoPagatore.anagrafica
            .toLowerCase()
            .includes(filtro.toLowerCase());
        default:
          return true;
      }
    });
    console.log(this.filteredRichiestePagamento)
  }

  dlFile(file:string){
    const xmlUrl = 'assets/files/rendicontazione.xml'; // Percorso relativo del xml
    const xmlName = file + '.xml'; // Nome del file scaricato

    const link = document.createElement('a'); // Crea un elemento <a>
    link.href = xmlUrl; // Imposta l'URL del file
    link.download = xmlName; // Imposta il nome del file scaricato
    link.click(); // Simula un click sul link
  }

 
}

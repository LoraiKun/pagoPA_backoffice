import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';
import {
  Filtro,
  RispostaRichiestaPagamento,
  RisultatiRichiestaPagamento,
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

  richiestePagamento: RisultatiRichiestaPagamento[] = [];
  filteredRichiestePagamento: RisultatiRichiestaPagamento[] = [];
  filtro!: Filtro;
  constructor(private http: HttpClient,private rendService: RendicontazioneService) {
    http
      .get<RispostaRichiestaPagamento>('assets/json/richieste_di_pagamento.json')
      .subscribe({
        next: (res) => {
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
    const { filtroMail, filtroIUV, filtroEnte, filtroCF_PI } = this.filtro;
  
    this.filteredRichiestePagamento = this.richiestePagamento.filter((richiesta) => {
      const matchesIUV = !filtroIUV.trim() || richiesta.pendenza.numeroAvviso.toString().includes(filtroIUV);
      const matchesEnte = !filtroEnte.trim() || richiesta.pendenza.dominio.ragioneSociale
        .toLowerCase()
        .includes(filtroEnte.toLowerCase());
      const matchesMail = !filtroMail.trim() || richiesta.pendenza.soggettoPagatore.anagrafica
        .toLowerCase()
        .includes(filtroMail.toLowerCase());
      const matchesCR_PI = !filtroCF_PI.trim() || richiesta.pendenza.causale
        .toLowerCase()
        .includes(filtroCF_PI.toLowerCase());
      
      // La richiesta deve soddisfare tutti i filtri non vuoti
      return matchesIUV && matchesEnte && matchesMail && matchesCR_PI;
    });
  
    console.log(this.filteredRichiestePagamento);
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

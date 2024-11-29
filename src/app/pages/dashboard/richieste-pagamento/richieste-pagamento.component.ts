import { Component, ElementRef, EventEmitter, Output, Renderer2, ViewChild } from '@angular/core';
import { TableModule } from 'primeng/table';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';
import { RendicontazioneService } from '../../../services/rendicontazione/rendicontazione.service';
import { RispostaRichiestaPagamento, RisultatiRichiestaPagamento } from '../../../models/pagamenti';

@Component({
  selector: 'app-richieste-pagamento',
  standalone: true,
  imports: [TableModule, CommonModule, PaginatorModule],
  templateUrl: './richieste-pagamento.component.html',
  styleUrl: './richieste-pagamento.component.css',
})
export class RichiestePagamentoComponent {
  @Output() notifica: EventEmitter<string> = new EventEmitter<string>()
  @Output() fileFR: EventEmitter<string> = new EventEmitter<string>()
  @ViewChild('prime_table') prime_table:any;
  private resizeObserver!: ResizeObserver; 
  richiestePagamento!: RisultatiRichiestaPagamento[];
  table!: HTMLTableElement;
  parent!: HTMLElement;
  constructor(private http: HttpClient, private renderer: Renderer2, private rendService: RendicontazioneService) {
    http
      .get<RispostaRichiestaPagamento>('assets/json/richieste_di_pagamento.json')
      .subscribe({
        next: (res) => {
          this.rendService.saveFiles(res.risultati)
          this.richiestePagamento = res.risultati;
        },
      });
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

  }



  emettiNotifica(IUV: string){
    this.notifica.emit(IUV)
  }
  emettiFile(IUV:string){
    this.fileFR.emit(IUV)
    this.rendService.updateVariable(IUV)
  }

}
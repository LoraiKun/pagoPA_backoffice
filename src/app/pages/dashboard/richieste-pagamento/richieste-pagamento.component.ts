import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { RichiesteDiPagamento } from '../../../models/pagamenti';
import { TableModule } from 'primeng/table';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-richieste-pagamento',
  standalone: true,
  imports: [TableModule, CommonModule, PaginatorModule],
  templateUrl: './richieste-pagamento.component.html',
  styleUrl: './richieste-pagamento.component.css',
})
export class RichiestePagamentoComponent {
 
  @ViewChild('resizeDiv') resizeDiv!: ElementRef;
  @ViewChild('prime_table') prime_table:any;
  private resizeObserver!: ResizeObserver;
  richiestePagamento!: RichiesteDiPagamento;
  table!: HTMLTableElement;
  parent!: HTMLElement;
  constructor(private http: HttpClient, private renderer: Renderer2) {
    http
      .get<RichiesteDiPagamento>('assets/json/richieste_di_pagamento.json')
      .subscribe({
        next: (res) => {
          this.richiestePagamento = res;
        },
      });
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    this.resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        // Funzione che viene eseguita ogni volta che il div subisce un resize
        this.onResize();
      }
    });
    this.resizeObserver.observe(this.resizeDiv.nativeElement);
  }

  onResize() {
    let totalWidth = 0
    let totalHeight = 0
    // const table = document.getElementById('pn_id_1-table');
    try {
      this.table = this.renderer.selectRootElement('table', true);
      console.log(this.table);
      
      this.parent = this.table.parentElement!;
      totalWidth = this.table.offsetWidth * 0.75
      totalHeight = this.table.offsetHeight * 0.75
      this.parent.style.width = totalWidth + 'px'
      // this.table.style.width = totalWidth+'px'
      this.parent.style.height = totalHeight + 'px'
      // this.table.style.height = totalHeight+'px'
      this.prime_table.reset();

      // Reimposta il paginatore alla prima pagina con 10 righe per pagina
      this.prime_table.rows = 10;
      this.prime_table.first = 0; // Vai alla prima pagina
      this.prime_table.resetPageOnSort = true;
  
      // Assicurati che l'aggiornamento sia applicato
      this.prime_table.updatePaginator();
    } catch (error) {}
  }


}
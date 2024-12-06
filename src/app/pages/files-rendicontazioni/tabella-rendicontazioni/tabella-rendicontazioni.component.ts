import { Component } from '@angular/core';
import {
  ResponseRendicontazione,
  Risultato,
} from '../../../models/rendicontazione';
import { FiltroFiles } from '../../../models/pagamenti';
import { HttpClient } from '@angular/common/http';
import { RendicontazioneService } from '../../../services/rendicontazione/rendicontazione.service';
import { TableModule } from 'primeng/table';
import { CommonModule, DatePipe } from '@angular/common';

@Component({
  selector: 'app-tabella-rendicontazioni',
  standalone: true,
  imports: [TableModule, CommonModule, DatePipe],
  templateUrl: './tabella-rendicontazioni.component.html',
  styleUrl: './tabella-rendicontazioni.component.css',
})
export class TabellaRendicontazioniComponent {
  rendicontazione: Risultato[] = [];
  filteredRendicontazione: Risultato[] = [];
  filtro: FiltroFiles = { filtroEnte: '', filtroID: '', filtroIUV: '' };
  constructor(
    private http: HttpClient,
    private rendService: RendicontazioneService
  ) {
    
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.rendService.filtroFiles$.subscribe((value) => {
      this.filtro = value;
      this.filtraRichieste();
    });
    this.filtro = this.rendService.getFiltroFiles()
    // console.log('filtro', this.filtro)
    this.http
      .get<ResponseRendicontazione>('assets/json/rendicontazione.json')
      .subscribe({
        next: (res) => {
          this.rendicontazione = res.risultati;
          this.filtraRichieste()

        },
      });
  }

  filtraRichieste(): void {

    const filtroIUV = this.filtro.filtroIUV ? this.filtro.filtroIUV.toString().trim() : '';
    const filtroEnte = this.filtro.filtroEnte ? this.filtro.filtroEnte.toString().trim() : '';
    const filtroID = this.filtro.filtroID ? this.filtro.filtroID.toString().trim() : '';
    this.filteredRendicontazione = this.rendicontazione.filter((richiesta) => {
      const matchesIUV =
        !filtroIUV.trim() || richiesta.iuv.toString().includes(filtroIUV);

      const matchesEnte =
        !filtroEnte.trim() ||
        richiesta.vocePendenza.dominio.ragioneSociale
          .toLowerCase()
          .includes(filtroEnte.toLowerCase());
      const matchesID =
        !filtroID.trim() ||
        richiesta.flussoRendicontazione.idFlusso
          .toLowerCase()
          .includes(filtroID.toLowerCase());

      // La richiesta deve soddisfare tutti i filtri non vuoti
      return matchesIUV && matchesEnte && matchesID;
    });

  }

  dlFile(file: string) {
    const xmlUrl = 'assets/files/rendicontazione.xml'; // Percorso relativo del xml
    const xmlName = file + '.xml'; // Nome del file scaricato

    const link = document.createElement('a'); // Crea un elemento <a>
    link.href = xmlUrl; // Imposta l'URL del file
    link.download = xmlName; // Imposta il nome del file scaricato
    link.click(); // Simula un click sul link
  }
}

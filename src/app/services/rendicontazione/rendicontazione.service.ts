import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import {
  Filtro,
  FiltroFiles,
  RisultatiRichiestaPagamento,
} from '../../models/pagamenti';
import { ResponseRendicontazione } from '../../models/rendicontazione';

@Injectable({
  providedIn: 'root',
})
export class RendicontazioneService {
  rendicontazione!: ResponseRendicontazione;
  files: string[] = [];
  private IUV = new BehaviorSubject<string>('');
  variable$ = this.IUV.asObservable();
  private filtro = new BehaviorSubject<Filtro>({
    filtroMail: '',
    filtroIUV: '',
    filtroEnte: '',
    filtroCF_PI: '',
  });
  filtro$ = this.filtro.asObservable();
  constructor(private http: HttpClient) {}
  private filtroFiles = new BehaviorSubject<FiltroFiles>({
    filtroEnte: '',
    filtroID: '',
    filtroIUV: '',
  });
  filtroFiles$ =this.filtroFiles.asObservable()

  getFiltroFiles(){
    return this.filtroFiles.getValue()
  }

  getRendicontazione() {
    return this.http.get<ResponseRendicontazione>(
      'assets/json/rendicontazione.json'
    );
  }
  saveFiles(files: RisultatiRichiestaPagamento[]) {
    this.files = [];
    files.forEach((file) => {
      this.files.push(file.pendenza.numeroAvviso.toString());
    });
  }
  getFiles() {
    return this.files;
  }

  updateVariable(newValue: string): void {
    this.IUV.next(newValue);
  }

  updateFiltro(partialFiltro: Partial<Filtro>): void {
    // Recupera il valore attuale del filtro
    const currentFiltro = this.filtro.value;

    // Aggiorna solo le proprietà fornite in `partialFiltro`
    const updatedFiltro = { ...currentFiltro, ...partialFiltro };
    // Emette il filtro aggiornato
    this.filtro.next(updatedFiltro);
  }

  updateFiltroFiles(partialFiltroFiles: Partial<FiltroFiles>) {
    // Recupera il valore attuale del filtro
    const currentFiltro = this.filtroFiles.value;

    // Aggiorna solo le proprietà fornite in `partialFiltro`
    const updatedFiltro = { ...currentFiltro, ...partialFiltroFiles };
    // console.log(updatedFiltro);
    // Emette il filtro aggiornato
    this.filtroFiles.next(updatedFiltro);

  }
}

import { Injectable } from '@angular/core';
import { FILE_FR, ResponseRendicontazione } from '../../models/rendicontazione';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Filtro } from '../../models/pagamenti';

@Injectable({
  providedIn: 'root',
})
export class RendicontazioneService {
  rendicontazione!: ResponseRendicontazione;
  private IUV = new BehaviorSubject<string>('');
  variable$ = this.IUV.asObservable();
  private filtro = new BehaviorSubject<Filtro> ({tipo: 'IUV', filtro: ''})
  filtro$ = this.filtro.asObservable();
  constructor(private http: HttpClient) {}
  getRendicontazione() {
    return this.http.get<ResponseRendicontazione>(
      'assets/json/rendicontazione.json'
    );
  }

  getFiles() {
    let files = FILE_FR;
    return files;
  }

  updateVariable(newValue: string): void {
    this.IUV.next(newValue);
  }
  updateFiltro(newFiltro:Filtro):void{
    this.filtro.next(newFiltro)
  }
}

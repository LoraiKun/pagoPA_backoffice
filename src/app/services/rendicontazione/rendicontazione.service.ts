import { Injectable } from '@angular/core';
import { ResponseRendicontazione } from '../../models/rendicontazione';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RendicontazioneService {
  rendicontazione!: ResponseRendicontazione
  constructor(private http: HttpClient) { 

  }
  getRendicontazione(){

      return this.http.get<ResponseRendicontazione>('assets/json/rendicontazione.json')
    

  }



}

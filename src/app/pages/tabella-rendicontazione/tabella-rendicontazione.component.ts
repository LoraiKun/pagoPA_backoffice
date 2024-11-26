import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { RendicontazioneService } from '../../services/rendicontazione/rendicontazione.service';
import { RisultatoRendicontazione } from '../../models/rendicontazione';

@Component({
  selector: 'app-tabella-rendicontazione',
  standalone: true,
  imports: [TableModule, CommonModule],
  templateUrl: './tabella-rendicontazione.component.html',
  styleUrl: './tabella-rendicontazione.component.css'
})
export class TabellaRendicontazioneComponent {
  rendicontazione!: RisultatoRendicontazione[]
  constructor(private rendService: RendicontazioneService){
    rendService.getRendicontazione().subscribe({
      next: (res)=>{
       this.rendicontazione = res.risultati 
      }
    })
  }
}

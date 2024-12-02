import { Component } from '@angular/core';
// import { ResponseRendicontazione, RisultatoRendicontazione } from '../../../models/rendicontazione';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RendicontazioneService } from '../../services/rendicontazione/rendicontazione.service';
import { TabellaRendicontazioniComponent } from './tabella-rendicontazioni/tabella-rendicontazioni.component';

@Component({
  selector: 'app-files-rendicontazioni',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonModule, TabellaRendicontazioniComponent],
  templateUrl: './files-rendicontazioni.component.html',
  styleUrl: './files-rendicontazioni.component.css',
})
export class FilesRendicontazioniComponent {
  filtro = {
    filtroID: '',
    filtroIUV: '',
    filtroEnte: '',
  };
  filterForm!: FormGroup;
  constructor(private rendService: RendicontazioneService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.filterForm = new FormGroup({
      filterIUV: new FormControl(''),
      filterEnte: new FormControl(''),
      filterID: new FormControl(''),
    });
  }
  submit(tipo: 'ID' | 'IUV' | 'ente') {
    switch (tipo) {
      case 'IUV': {
        // if (this.filterForm.get('filterIUV')?.value)
          this.filtro.filtroIUV = this.filterForm.get('filterIUV')?.value;
        break;
      }
      case 'ID': {
        // if (this.filterForm.get('filterID')?.value)
          this.filtro.filtroID = this.filterForm.get('filterID')?.value;
        // console.log('filtro:', this.filtro, this.filterForm.get('filterID')?.value);
        break;
      }
      case 'ente': {
        // if (this.filterForm.get('filterEnte')?.value)
          this.filtro.filtroEnte = this.filterForm.get('filterEnte')?.value;
        break;
      }
    }
    this.rendService.updateFiltroFiles(this.filtro);
  }
}

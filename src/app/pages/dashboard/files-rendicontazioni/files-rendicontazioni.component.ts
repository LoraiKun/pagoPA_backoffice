import { Component } from '@angular/core';
import { ResponseRendicontazione, RisultatoRendicontazione } from '../../../models/rendicontazione';
import { RendicontazioneService } from '../../../services/rendicontazione/rendicontazione.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-files-rendicontazioni',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './files-rendicontazioni.component.html',
  styleUrl: './files-rendicontazioni.component.css'
})
export class FilesRendicontazioniComponent {
  filtredFiles!: RisultatoRendicontazione[];
  filterForm!: FormGroup
  files!: RisultatoRendicontazione[]
  constructor(private rendService: RendicontazioneService){
    rendService.getRendicontazione().subscribe({
      next: (res)=>{
        console.log(res)
        this.files = res.risultati
        this.filtredFiles = this.files
      }
    })
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.filterForm = new FormGroup({
      filter: new FormControl('')
    })
  }

  filterFiles(){
    // console.log('dentro')
    if (this.filterForm.get('filter')?.value != '') {
      this.filtredFiles = this.files; // Se la stringa di ricerca è vuota, restituisci la lista originale
    }
  
    // Filtra i file il cui nome contiene la stringa di ricerca (case insensitive)
    this.filtredFiles = this.files.filter(file => 
      file.idFlusso.toLowerCase().includes(this.filterForm.get('filter')?.value.toLowerCase())
    );
    console.log(this.filtredFiles)
  }


}

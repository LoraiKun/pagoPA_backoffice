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
  }

  dlFile(file:RisultatoRendicontazione){
    const pdfUrl = 'assets/files/Editabile_Modulo di Rendicontazione_Bando_Voucher_Digitali_I4.0_2021.pdf'; // Percorso relativo del PDF
    const pdfName = file.dataFlusso+ '.pdf'; // Nome del file scaricato

    const link = document.createElement('a'); // Crea un elemento <a>
    link.href = pdfUrl; // Imposta l'URL del file
    link.download = pdfName; // Imposta il nome del file scaricato
    link.click(); // Simula un click sul link
  }

}

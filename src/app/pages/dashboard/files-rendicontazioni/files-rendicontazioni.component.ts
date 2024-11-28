import { Component } from '@angular/core';
import { ResponseRendicontazione, RisultatoRendicontazione } from '../../../models/rendicontazione';
import { RendicontazioneService } from '../../../services/rendicontazione/rendicontazione.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-files-rendicontazioni',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonModule],
  templateUrl: './files-rendicontazioni.component.html',
  styleUrl: './files-rendicontazioni.component.css'
})
export class FilesRendicontazioniComponent {
  filtredFiles: string[] = []
  filterForm!: FormGroup
  constructor(private rendService: RendicontazioneService){
    
  }

  submit(){
    if(this.filterForm.get('filter')?.value != '' && this.filterForm.get('filter')?.value != null)
    {
    let fileList: string[] = this.rendService.getFiles()
    fileList.forEach(file =>{
      if( file.includes(this.filterForm.get('filter')?.value)){
        this.filtredFiles.push(file)
      }
    })
  }else{
    this.filtredFiles = []
  }
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.filterForm = new FormGroup({
      filter: new FormControl('')
    })
    this.rendService.variable$.subscribe(value => {
      this.filterForm.setValue({'filter' : value})
      this.submit()
    })
  }

  // filterFiles(){
  //   // console.log('dentro')
  //   if (this.filterForm.get('filter')?.value != '') {
  //     this.filtredFiles = this.files; // Se la stringa di ricerca è vuota, restituisci la lista originale
  //   }
  
  //   // Filtra i file il cui nome contiene la stringa di ricerca (case insensitive)
  //   this.filtredFiles = this.files.filter(file => 
  //     file.idFlusso.toLowerCase().includes(this.filterForm.get('filter')?.value.toLowerCase())
  //   );
  // }

  dlFile(file:string){
    const xmlUrl = 'assets/files/rendicontazione.xml'; // Percorso relativo del xml
    const xmlName = file + '.xml'; // Nome del file scaricato

    const link = document.createElement('a'); // Crea un elemento <a>
    link.href = xmlUrl; // Imposta l'URL del file
    link.download = xmlName; // Imposta il nome del file scaricato
    link.click(); // Simula un click sul link
  }

}

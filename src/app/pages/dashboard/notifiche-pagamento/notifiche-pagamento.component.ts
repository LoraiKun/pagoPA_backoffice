import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { RendicontazioneService } from '../../../services/rendicontazione/rendicontazione.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-notifiche-pagamento',
  standalone: true,
  imports: [ReactiveFormsModule, ButtonModule],
  templateUrl: './notifiche-pagamento.component.html',
  styleUrl: './notifiche-pagamento.component.css'
})
export class NotifichePagamentoComponent {
  filterForm!: FormGroup
  constructor(private rendService: RendicontazioneService){
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

  submit(){}

}

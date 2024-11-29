import { Component, Input } from '@angular/core';
import { Segnalazioni } from '../../../models/pagamenti';
import { TableModule } from 'primeng/table';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-segnalazioni',
  standalone: true,
  imports: [TableModule, DatePipe],
  templateUrl: './segnalazioni.component.html',
  styleUrl: './segnalazioni.component.css'
})
export class SegnalazioniComponent {
  @Input() segnalazioni!: Segnalazioni[]
  @Input() IUV!: number
}

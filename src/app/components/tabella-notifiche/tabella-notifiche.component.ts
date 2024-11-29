import { Component, Input } from '@angular/core';
import { TableModule } from 'primeng/table';
import { Segnalazioni } from '../../models/pagamenti';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-tabella-notifiche',
  standalone: true,
  imports: [TableModule, DatePipe],
  templateUrl: './tabella-notifiche.component.html',
  styleUrl: './tabella-notifiche.component.css'
})
export class TabellaNotificheComponent {
  @Input() notifiche!: Segnalazioni[]
}

import { Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { RicercaPagamentoComponent } from '../../pages/ricerca-pagamento/ricerca-pagamento.component';
import { FilesRendicontazioniComponent } from '../../pages/files-rendicontazioni/files-rendicontazioni.component';
export const routes: Routes = [
  {
    path: 'home',
    //home carica la sidebar che cotiene un router outlet per caricare tutto il resto.
    component: MainComponent,
    children: [
      { path: '', component: RicercaPagamentoComponent },
      { path: 'rendicontazione', component: FilesRendicontazioniComponent}
    ],
  },
];

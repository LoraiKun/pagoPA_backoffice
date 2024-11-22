import { Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
export const routes: Routes = [
    {
      path: 'home',
      //home carica la sidebar che cotiene un router outlet per caricare tutto il resto.
      component: MainComponent,
      children: [
        { path: '', component: DashboardComponent}
      ],
    },
  ];
  
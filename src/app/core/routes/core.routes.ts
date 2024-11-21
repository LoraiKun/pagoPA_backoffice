import { Routes } from '@angular/router';
import { MainComponent } from '../main/main.component';
export const routes: Routes = [
    {
      path: 'home',
      //home carica la sidebar che cotiene un router outlet per caricare tutto il resto.
      component: MainComponent,
      children: [

      ],
    },
  ];
  
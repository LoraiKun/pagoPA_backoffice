import { Routes } from '@angular/router';
import { authGuard } from './guard/auth.guard';
import { LoginComponent } from './pages/login/login.component';
import { RecoverPasswordComponent } from './pages/login/recover-password/recover-password.component';





export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'rec-psw', component: RecoverPasswordComponent},
  {
    path: '',
    canActivate: [authGuard],
    loadChildren: () => {
      return getChildren();
    },
  },
];

async function getChildren() {
    const r = await import('./core/routes/core.routes');
    return r.routes;
  }
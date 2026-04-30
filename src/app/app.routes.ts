import { Routes } from '@angular/router';

import { LoginComponent } from './features/auth/components/login/login';
import { ReleveListeComponent } from './features/releves/components/releve-liste/releve-liste';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },

  { path: 'releves', component: ReleveListeComponent },

  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

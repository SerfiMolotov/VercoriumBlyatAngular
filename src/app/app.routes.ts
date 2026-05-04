import { Routes } from '@angular/router';

import { LoginComponent } from './features/auth/components/login/login';
import { ReleveListeComponent } from './features/releves/components/releve-liste/releve-liste';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout';
import { HomeComponent } from './features/dashboard/home/home';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      { path: 'dashboard', component: HomeComponent
      },
      { path: 'releves', component: ReleveListeComponent },

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },

  { path: '**', redirectTo: 'dashboard' }
];

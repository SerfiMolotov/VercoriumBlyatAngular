import { Routes } from '@angular/router';

import { LoginComponent } from './features/auth/components/login/login';
import { ReleveListeComponent } from './features/releves/components/releve-liste/releve-liste';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout';
import { HomeComponent } from './features/dashboard/home/home';
import { ReleveCreateComponent } from './features/releves/components/releve-create/releve-create';
import { authGuard } from './core/guards/auth-guard';
import { SiteListeComponent } from './features/sites/components/site-liste/site-liste';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: DashboardLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: 'dashboard', component: HomeComponent },
      { path: 'releves', component: ReleveListeComponent },
      { path: 'releves/nouveau', component: ReleveCreateComponent },
      { path: 'sites', component: SiteListeComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },

  { path: '**', redirectTo: 'dashboard' }
];

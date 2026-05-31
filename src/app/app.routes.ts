import { Routes } from '@angular/router';

import { LoginComponent } from './features/auth/components/login/login';
import { ReleveListeComponent } from './features/releves/components/releve-liste/releve-liste';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout';
import { HomeComponent } from './features/dashboard/home/home';
import { ReleveCreateComponent } from './features/releves/components/releve-create/releve-create';
import { authGuard } from './core/guards/auth-guard';
import { SiteListeComponent } from './features/sites/components/site-liste/site-liste';
import { SiteEditComponent } from './features/sites/components/site-edit/site-edit';
import { SiteCapteursComponent } from './features/sites/components/site-capteurs/site-capteurs';
import { SiteCreateComponent } from './features/sites/components/site-create/site-create';
import { roleGuard } from './core/guards/role.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },

  {
    path: '',
    component: DashboardLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: 'dashboard', component: HomeComponent },
      { path: 'releves', component: ReleveListeComponent },

      {
        path: 'releves/nouveau',
        component: ReleveCreateComponent,
        canActivate: [roleGuard],
        data: { requiredRoles: ['is_technicien', 'is_admin'] },
      },

      { path: 'sites', component: SiteListeComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

      {
        path: 'sites/modifier/:id',
        component: SiteEditComponent,
        canActivate: [roleGuard],
        data: { requiredRoles: ['is_technicien', 'is_chef_site', 'is_admin'] },
      },

      {
        path: 'sites/:id/capteurs',
        component: SiteCapteursComponent,
        canActivate: [roleGuard],
        data: { requiredRoles: ['is_technicien', 'is_chef_site', 'is_admin'] },
      },

      {
        path: 'sites/nouveau',
        component: SiteCreateComponent,
        canActivate: [roleGuard],
        data: { requiredRoles: ['is_admin'] },
      },
    ],
  },

  { path: '**', redirectTo: 'dashboard' },
];

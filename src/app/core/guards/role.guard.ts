import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth';

export const roleGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  if (typeof window === 'undefined') {
    return true;
  }

  const currentUser = authService.getCurrentUserValue();

  if (!currentUser) {
    router.navigate(['/login']);
    return false;
  }

  if (currentUser.role === 'admin' || currentUser.permissions?.is_admin === true) {
    return true;
  }

  const requiredRoles: string[] = route.data['requiredRoles'];

  if (requiredRoles && requiredRoles.length > 0) {
    const hasPermission = requiredRoles.some((reqRole) => {
      const roleBase = reqRole.replace('is_', '');

      return currentUser.permissions?.[reqRole] === true || currentUser.role === roleBase;
    });

    if (!hasPermission) {
      alert("Accès refusé : Vous n'avez pas les habilitations nécessaires pour cette action.");
      router.navigate(['/dashboard']);
      return false;
    }
  }

  return true;
};

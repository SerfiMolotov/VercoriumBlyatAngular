import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../core/services/auth';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard-layout.html',
})
export class DashboardLayoutComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  seDeconnecter() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}

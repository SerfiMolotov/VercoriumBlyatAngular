import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class HomeComponent implements OnInit {
  utilisateur: any = null;

  constructor(
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.authService.getProfilUtilisateur().subscribe({
      next: (donnees) => {
        this.utilisateur = donnees;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Impossible de charger le profil', err);
      }
    });
  }
}

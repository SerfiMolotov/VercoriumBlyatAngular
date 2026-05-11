import { Component, afterNextRender, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ReleveService } from '../../services/releve';

@Component({
  selector: 'app-releve-liste',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './releve-liste.html',
  styleUrl: './releve-liste.css'
})
export class ReleveListeComponent {
  releves: any[] = [];

  constructor(
    private releveService: ReleveService,
    private cdr: ChangeDetectorRef
  ) {
    afterNextRender(() => {
      this.chargerReleves();
    });
  }

  chargerReleves(): void {
    this.releveService.getReleves().subscribe({
      next: (reponse: any) => {
        if (Array.isArray(reponse)) {
          this.releves = reponse;
        } else if (reponse && Array.isArray(reponse.data)) {
          this.releves = reponse.data;
        } else if (reponse && Array.isArray(reponse.releves)) {
          this.releves = reponse.releves;
        }
        console.log('Relevés chargés avec succès :', this.releves);

        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Erreur de chargement (Token absent ou expiré) :', err);
      }
    });
  }
}

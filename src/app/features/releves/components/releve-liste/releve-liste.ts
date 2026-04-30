import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReleveService } from '../../services/releve';
import { Releve } from '../../models/releve';

@Component({
  selector: 'app-releve-liste',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './releve-liste.html',
  styleUrl: './releve-liste.css'
})
export class ReleveListeComponent implements OnInit {
  releves: Releve[] = [];

  constructor(private releveService: ReleveService) {}

  ngOnInit(): void {
    this.chargerReleves();
  }

  chargerReleves(): void {
    this.releveService.getReleves().subscribe({
      next: (reponse: any) => {
        console.log('Réponse brute reçue depuis Laravel :', reponse);

        if (reponse.data) {
          this.releves = reponse.data;
        }
        else if (reponse.releves) {
          this.releves = reponse.releves;
        }
        else {
          this.releves = reponse;
        }
      },
      error: (err) => {
        console.error('Erreur API Laravel :', err);
      }
    });
  }
}

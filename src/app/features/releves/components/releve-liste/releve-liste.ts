import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// Tes imports exacts !
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
      next: (data) => {
        this.releves = data;
        console.log('Relevés reçus depuis Laravel :', data);
      },
      error: (err) => {
        console.error('Erreur API Laravel :', err);
      }
    });
  }
}

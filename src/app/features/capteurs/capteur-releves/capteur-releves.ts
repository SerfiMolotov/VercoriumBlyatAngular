import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-capteur-releves',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './capteur-releves.html',
})
export class CapteurRelevesComponent implements OnInit {
  capteur: any = null;
  donnees: any[] = [];
  chargement = true;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.chargement = true;

      const id = params.get('id') || this.route.parent?.snapshot.paramMap.get('id');

      if (id) {
        this.http.get(`http://localhost:8000/api/capteurs/${id}/donnees`).subscribe({
          next: (reponse: any) => {
            this.capteur = reponse.capteur;
            this.donnees = reponse.donnees;
            this.chargement = false;

            this.cdr.detectChanges();
          },
          error: (erreur) => {
            console.error('Erreur API :', erreur);
            this.chargement = false;
            this.cdr.detectChanges();
          },
        });
      }
    });
  }
}

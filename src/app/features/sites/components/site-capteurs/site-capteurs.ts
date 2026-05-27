import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { SiteService } from '../../services/site';

@Component({
  selector: 'app-site-capteurs',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './site-capteurs.html'
})
export class SiteCapteursComponent implements OnInit {
  siteId!: number;
  site: any = null;
  capteurs: any[] = [];
  chargement = true;

  constructor(
    private route: ActivatedRoute,
    private siteService: SiteService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.siteId = Number(this.route.snapshot.paramMap.get('id'));

    this.siteService.getSite(this.siteId).subscribe({
      next: (donneesSite) => {
        this.site = donneesSite;

        this.siteService.getCapteursParSite(this.siteId).subscribe({
          next: (donneesCapteurs) => {
            this.capteurs = donneesCapteurs;
            this.chargement = false;
            this.cdr.detectChanges();
          }
        });
      },
      error: (err) => {
        console.error('Erreur', err);
        this.chargement = false;
      }
    });
  }
}

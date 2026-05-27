import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { SiteService } from '../../services/site';

@Component({
  selector: 'app-site-edit',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './site-edit.html'
})
export class SiteEditComponent implements OnInit {
  siteForm: FormGroup;
  siteId!: number;
  chargement = true;
  enCoursDeSoumission = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private siteService: SiteService,
    private cdr: ChangeDetectorRef
  ) {

    this.siteForm = this.fb.group({
      nom: ['', Validators.required],
      adresse: [''],
      ville: ['', Validators.required],
      code_postal: ['', Validators.required],
      type: ['', Validators.required],
      description: ['']
    });
  }

  ngOnInit() {
    this.siteId = Number(this.route.snapshot.paramMap.get('id'));

    this.siteService.getSite(this.siteId).subscribe({
      next: (donnees) => {

        this.siteForm.patchValue(donnees);
        this.chargement = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Erreur de chargement', err);
        alert('Impossible de charger les données de ce site.');
        this.router.navigate(['/sites']);
      }
    });
  }

  soumettre() {
    if (this.siteForm.invalid) return;

    this.enCoursDeSoumission = true;

    this.siteService.updateSite(this.siteId, this.siteForm.value).subscribe({
      next: () => {
        this.router.navigate(['/sites']);
      },
      error: (err) => {
        console.error('Erreur lors de la modification', err);
        alert('Erreur lors de la sauvegarde.');
        this.enCoursDeSoumission = false;
        this.cdr.detectChanges();
      }
    });
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SiteService } from '../../services/site';

@Component({
  selector: 'app-site-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './site-create.html',
})
export class SiteCreateComponent {
  siteForm: FormGroup;
  enCoursDeSoumission = false;

  constructor(
    private fb: FormBuilder,
    private siteService: SiteService,
    private router: Router,
  ) {
    this.siteForm = this.fb.group({
      nom: ['', Validators.required],
      adresse: [''],
      ville: ['', Validators.required],
      code_postal: ['', Validators.required],
      type: ['', Validators.required],
      description: [''],
    });
  }

  soumettre() {
    if (this.siteForm.invalid) return;

    this.enCoursDeSoumission = true;

    this.siteService.creerSite(this.siteForm.value).subscribe({
      next: () => {
        this.router.navigate(['/sites']);
      },
      error: (err) => {
        console.error('Erreur de création', err);
        alert('Erreur lors de la sauvegarde du site.');
        this.enCoursDeSoumission = false;
      },
    });
  }
}

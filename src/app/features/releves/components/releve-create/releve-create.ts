import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ReleveService } from '../../services/releve';

@Component({
  selector: 'app-releve-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './releve-create.html'
})
export class ReleveCreateComponent implements OnInit {
  releveForm: FormGroup;
  enCoursDeSoumission = false;

  sites: any[] = [];

  constructor(
    private fb: FormBuilder,
    private releveService: ReleveService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {
    this.releveForm = this.fb.group({
      date_releve: ['', Validators.required],
      site_id: ['', Validators.required],
      profondeur: ['', [Validators.required, Validators.min(0)]],
      observations: [''],
      anomalies: [false]
    });
  }

  ngOnInit() {
    this.releveService.getSites().subscribe({
      next: (donnees) => {
        this.sites = donnees;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Erreur lors du chargement des sites', err);
      }
    });
  }

  soumettre() {
    if (this.releveForm.invalid) {
      alert("Veuillez remplir correctement les champs obligatoires.");
      return;
    }

    this.enCoursDeSoumission = true;

    this.releveService.creerReleve(this.releveForm.value).subscribe({
      next: (reponse) => {
        console.log('Relevé créé avec succès', reponse);
        this.router.navigate(['/releves']);
      },
      error: (err) => {
        console.error('Erreur lors de la création', err);
        alert("Erreur lors de la sauvegarde.");
        this.enCoursDeSoumission = false;
      }
    });
  }
}

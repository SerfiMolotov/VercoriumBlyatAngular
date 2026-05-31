import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ReleveService } from '../../services/releve';

@Component({
  selector: 'app-releve-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './releve-create.html',
})
export class ReleveCreateComponent implements OnInit {
  releveForm: FormGroup;
  enCoursDeSoumission = false;

  sites: any[] = [];

  constructor(
    private fb: FormBuilder,
    private releveService: ReleveService,
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {
    this.releveForm = this.fb.group({
      date_releve: ['', Validators.required],
      site_id: ['', Validators.required],
      profondeur: ['', [Validators.required, Validators.min(0)]],

      meteo: [''],
      type_intervention: ['routine', Validators.required],
      duree_intervention: [null, Validators.min(0)],

      statut_production: ['normale', Validators.required],
      etat_structure: ['bon', Validators.required],
      niveau_stockage_general: [null, [Validators.min(0), Validators.max(100)]],

      perimetre_securise: [true],
      fuites_visibles: [false],
      anomalies: [false],

      observations: [''],
      signature_technicien: [false, Validators.requiredTrue],
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
      },
    });
  }

  soumettre() {
    if (this.releveForm.invalid)
    {
      this.releveForm.markAllAsTouched();
      alert('Veuillez remplir correctement les champs obligatoires.');
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
        alert('Erreur lors de la sauvegarde.');
        this.enCoursDeSoumission = false;
      },
    });
  }
}

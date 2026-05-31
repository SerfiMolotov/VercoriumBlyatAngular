export interface Releve {
  id: number;
  date_releve: string;
  user_id: number;
  site_id: number;
  profondeur: number;
  meteo?: 'ensoleille' | 'pluie' | 'neige' | 'vent_fort' | 'autre' | null;
  type_intervention: 'routine' | 'depannage' | 'installation';
  duree_intervention?: number | null;
  etat_structure: 'bon' | 'degrade' | 'critique';
  perimetre_securise: boolean;
  fuites_visibles: boolean;
  statut_production: 'normale' | 'arret' | 'degrade';
  niveau_stockage_general?: number | null;
  photo_url?: string | null;
  signature_technicien: boolean;
  anomalies: boolean;
  observations?: string | null;
  created_at?: string;
  updated_at?: string;
  site?: { id: number; nom: string };
  user?: { id: number; name: string };
}

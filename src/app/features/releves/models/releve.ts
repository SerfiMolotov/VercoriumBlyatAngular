export interface Releve {
  id: number;
  date_releve: string;
  user_id: number;
  site_id: string;
  profondeur: string;
  observations: string;
  created_at?: string;
  updated_at?: string;
}

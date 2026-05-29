import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SiteService {
  private apiUrl = 'http://localhost:8000/api/sites';

  constructor(private http: HttpClient) {}

  getSites(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getSite(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updateSite(id: number, donnees: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, donnees);
  }

  getCapteursParSite(siteId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${siteId}/capteurs`);
  }

  creerSite(donnees: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, donnees);
  }
}

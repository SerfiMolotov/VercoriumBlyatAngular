import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Releve } from '../models/releve';

@Injectable({
  providedIn: 'root'
})
export class ReleveService {
  private apiUrl = 'http://localhost:8000/api/releves';

  constructor(private http: HttpClient) { }

  getReleves(): Observable<Releve[]> {
    return this.http.get<Releve[]>(this.apiUrl);
  }
  creerReleve(donnees: any): Observable<any> {
    return this.http.post(`http://localhost:8000/api/addReleve`, donnees);
  }
  getSites(): Observable<any> {
    return this.http.get('http://localhost:8000/api/sites');
  }
}

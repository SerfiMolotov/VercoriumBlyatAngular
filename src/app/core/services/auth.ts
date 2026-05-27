import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8000/api';

  constructor(private http: HttpClient) {}

  login(donnees: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, donnees);
  }

  getProfilUtilisateur(): Observable<any> {
    return this.http.get(`${this.apiUrl}/user`);
  }
}

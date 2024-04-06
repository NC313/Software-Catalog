import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private apiUrl = 'https://api.example.com';

  constructor(private http: HttpClient) { }
  getSoftwareData(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/software`);
  }

  getSoftwareDetails(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/software/${id}`);
  }

  getSoftwarePricing(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/software/${id}/pricing`);
  }
}
//Place Holders until Tomorrow

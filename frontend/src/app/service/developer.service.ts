import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Developer } from '../entities/developer';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {
  private apiUrl = "/api/developer";
  private headers = new HttpHeaders({
    'Authorization': '',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })

  constructor(private http:HttpClient) { }

  addDeveloper(developer:Developer):Observable<Developer>{
    return this.http.post<Developer>(`${this.apiUrl}`, developer, { headers: this.headers });
  }

  getDevelopers():Observable<Set<Developer>>{
    return this.http.get<Set<Developer>>(`${this.apiUrl}`, { headers: this.headers });
  }

  deleteDeveloper(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: this.headers });
  }
}

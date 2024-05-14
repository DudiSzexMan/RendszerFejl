import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { httpHeaders } from './user.service';
import { Project } from '../entities/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = "/api/project";

  constructor(private http:HttpClient) { }

  createProject(project:Project):Observable<Project>{
    return this.http.post<Project>(`${this.apiUrl}`, project, { headers: httpHeaders.headers });
  }

  getProjectById(id: number):Observable<Project>{
    return this.http.get<Project>(`${this.apiUrl}/${id}`, { headers: httpHeaders.headers });
  }

  getProjects():Observable<Set<Project>>{
    return this.http.get<Set<Project>>(`${this.apiUrl}`, { headers: httpHeaders.headers });
  }

  deleteProject(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: httpHeaders.headers });
  }
}

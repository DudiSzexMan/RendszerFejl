import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../entities/task';
import { Observable } from 'rxjs';
import { httpHeaders } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = "/api/task";

  constructor(private http:HttpClient) {

  }

  createTask(task:Task,projectId:number):Observable<Task>{
    return this.http.post<Task>(`${this.apiUrl}/${projectId}`, task, { headers: httpHeaders.headers });
  }
  
  deleteTask(id:number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, { headers: httpHeaders.headers });
  }

  getTasksByProjectId(id: number):Observable<Set<Task>>{
    return this.http.get<Set<Task>>(`${this.apiUrl}/${id}`, { headers: httpHeaders.headers });
  }

  getOwnTask(id: number):Observable<Task>{
    return this.http.get<Task>(`${this.apiUrl}/${id}/own`, { headers: httpHeaders.headers });
  }

  getDeadlineTasks():Observable<Set<Task>>{
    return this.http.get<Set<Task>>(`${this.apiUrl}/deadline`, { headers: httpHeaders.headers });
  }
}

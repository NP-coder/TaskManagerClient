import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AUTH_API_URL } from '../app-injection-tokens';
import { Task } from '../modules/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  baseApiUrl: string = `${this.apiUrl}api/worktask/`

  constructor(private http: HttpClient, @Inject(AUTH_API_URL) private apiUrl: string) { }

  getAllTasks(): Observable<Task[]>{
    return this.http.get<Task[]>(`${this.baseApiUrl}all`);
  }

  addTask(addTaskRequest: Task): Observable<Task>{
    addTaskRequest.id = '00000000-0000-0000-0000-000000000000';
    addTaskRequest.userId = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Task>(`${this.baseApiUrl}`, addTaskRequest);
  }

  getTaskById(id: string): Observable<Task>{
    return this.http.get<Task>(`${this.baseApiUrl}` + id);
  }

  getTaskByUser(): Observable<Task[]>{
    return this.http.get<Task[]>(`${this.baseApiUrl}byUser`);
  }

  updateTask(id: string, updateTaskRequest: Task): Observable<Task>{
    return this.http.put<Task>(`${this.baseApiUrl}` + id, updateTaskRequest);
  }

  deleteTask(id: string): Observable<Task>{
    return this.http.delete<Task>(`${this.baseApiUrl}` + id);
  }

}

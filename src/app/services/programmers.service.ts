import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AUTH_API_URL } from '../app-injection-tokens';
import { Programmer } from '../modules/programmer.model';

@Injectable({
  providedIn: 'root'
})
export class ProgrammersService {

  baseApiUrl: string = `${this.apiUrl}api/`
  constructor(private http: HttpClient, @Inject(AUTH_API_URL) private apiUrl: string) { }

  getAllProgrammers(): Observable<Programmer[]>{
    return this.http.get<Programmer[]>(`${this.baseApiUrl}user`);
  }

  addProgrammer(addProgrammerRequest: Programmer): Observable<Programmer>{
    addProgrammerRequest.id = '00000000-0000-0000-0000-000000000000';
    addProgrammerRequest.roleId = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Programmer>(`${this.baseApiUrl}user`, addProgrammerRequest);
  }
}

import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AUTH_API_URL } from '../app-injection-tokens';
import { Token } from '../modules/token.model';

export const ACCESS_TOKEN_KEY = 'access_token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, @Inject(AUTH_API_URL) private apiUrl: string, private jwtHelper: JwtHelperService, private router: Router) { }

  login(email: string, password: string): Observable<Token>{
    return this.http.post<Token>(`${this.apiUrl}api/auth/login`, {
      email, password
    }).pipe(
      tap(token => {
        localStorage.setItem(ACCESS_TOKEN_KEY, token.access_token);
      })
    )
  }

  isAuthenticated(): boolean{
    var token = localStorage.getItem(ACCESS_TOKEN_KEY);
    return !token && this.jwtHelper.isTokenExpired(token);
  }

  getUserRole(): boolean {
      var token = localStorage.getItem(ACCESS_TOKEN_KEY);
      var role = this.jwtHelper.decodeToken(token!);
      if(role["role"] === 'Admin'){
        return true;
      }
      return false;
  }

  logout(): void{
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    this.router.navigate(['']);
  }
}

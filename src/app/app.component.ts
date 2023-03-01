import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public get isLoggedIn(): boolean{
    return this.as.isAuthenticated();
  }
  // public get isProgrammer(): boolean{
  //   return this.as.isAuthenticated();
  // }
  public get isAdmin(): boolean{
    return this.as.getUserRole();
  }

  constructor(private as: AuthService) {}

  logout(){
    this.as.logout()
  }

  getUserRole(){
    console.log(this.as.getUserRole());
  }
}

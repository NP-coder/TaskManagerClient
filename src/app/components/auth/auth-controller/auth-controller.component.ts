import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth-controller',
  templateUrl: './auth-controller.component.html',
  styleUrls: ['./auth-controller.component.css']
})
export class AuthControllerComponent {
  
  public get isLoggedIn(): boolean{
    return this.as.isAuthenticated();
  }

  constructor(private as: AuthService) { }

  login(email: string, password: string){
    this.as.login(email, password).subscribe(res =>{

    }, error => {
      alert('Wrong login or password')
    })
  }

}

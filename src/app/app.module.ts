import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgrammersListComponent } from './components/programmers/programmers-list/programmers-list.component';
import { AddProgrammerComponent } from './components/programmers/add-programmer/add-programmer.component';
import { FormsModule } from '@angular/forms';
import { TasksListComponent } from './components/work-tasks/tasks-list/tasks-list.component';
import { AddTaskComponent } from './components/work-tasks/add-task/add-task.component';
import { EditTaskComponent } from './components/work-tasks/edit-task/edit-task.component';
import { JwtModule } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environment';
import { ACCESS_TOKEN_KEY } from './services/auth.service';
import { AuthControllerComponent } from './components/auth/auth-controller/auth-controller.component';
import { AUTH_API_URL } from './app-injection-tokens';

export function tokenGetter(){
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

@NgModule({
  declarations: [
    AppComponent,
    ProgrammersListComponent,
    AddProgrammerComponent,
    TasksListComponent,
    AddTaskComponent,
    EditTaskComponent,
    AuthControllerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: environment.tokenAllowedDomains
      }
    })
  ],
  providers: [{
    provide: AUTH_API_URL,
    useValue: environment.baseApiUrl
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/modules/task.model';
import { TasksService } from 'src/app/services/tasks.service';
import { BrowserModule } from '@angular/platform-browser'
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

  tasks: Task[] = [];

  public get isAdmin(): boolean{
    return this.as.getUserRole();
  }

  constructor(private taskservise: TasksService, private as: AuthService){}

  ngOnInit(): void{
    if(this.isAdmin){
      this.taskservise.getAllTasks().subscribe({
        next: (tasks) => {
          this.tasks = tasks;
        },
        error: (response) =>{
          console.log(response);
        }
      });
    } else{
      this.taskservise.getTaskByUser().subscribe({
        next: (tasks) => {
          this.tasks = tasks;
        },
        error: (response) =>{
          console.log(response);
        }
      });
    }
  }
}

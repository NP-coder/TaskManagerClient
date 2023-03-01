import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/modules/task.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  addTaskRequest: Task = {
    id: '',
    name: '',
    timeSpent: 0,
    date: new Date(),
    userId: ''
  }

  constructor(private taskService: TasksService, private router: Router) {}

  ngOnInit(): void {

  }

  addTask(){
    this.taskService.addTask(this.addTaskRequest)
    .subscribe({
      next: (task) => {
        this.router.navigate(['tasks']);
      }
    });
  }
}

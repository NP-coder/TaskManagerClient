import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Task } from 'src/app/modules/task.model';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  taskDetails: Task = {
    id: '',
    name: '',
    timeSpent: 0,
    date: new Date(),
    userId: ''
  };

  constructor(private route: ActivatedRoute, private taskService: TasksService, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');

        if(id){
          this.taskService.getTaskById(id).subscribe({
            next: (response) => {
              this.taskDetails = response;
            }
          })
        }
      }
    })
  }

  updateTask(){
    this.taskService.updateTask(this.taskDetails.id, this.taskDetails).subscribe({
      next: (response) => {
        this.router.navigate(['tasks']);
      }
    })
  }

  deleteTask(id: string){
    this.taskService.deleteTask(id).subscribe({
      next: (response) => {
        this.router.navigate(['tasks']);
      }
    })
  }
}

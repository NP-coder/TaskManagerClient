import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthControllerComponent } from './components/auth/auth-controller/auth-controller.component';
import { AddProgrammerComponent } from './components/programmers/add-programmer/add-programmer.component';
import { ProgrammersListComponent } from './components/programmers/programmers-list/programmers-list.component';
import { AddTaskComponent } from './components/work-tasks/add-task/add-task.component';
import { EditTaskComponent } from './components/work-tasks/edit-task/edit-task.component';
import { TasksListComponent } from './components/work-tasks/tasks-list/tasks-list.component';

const routes: Routes = [
  {path: '', component: AuthControllerComponent},
  {path: 'programmers', component: ProgrammersListComponent},
  {path: 'programmers/add', component: AddProgrammerComponent},
  {path: 'tasks', component: TasksListComponent},
  {path: 'tasks/add', component: AddTaskComponent},
  {path: 'tasks/edit/:id', component: EditTaskComponent},
  {path: 'auth', component: AuthControllerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

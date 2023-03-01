import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Programmer } from 'src/app/modules/programmer.model';
import { ProgrammersService } from 'src/app/services/programmers.service';

@Component({
  selector: 'app-add-programmer',
  templateUrl: './add-programmer.component.html',
  styleUrls: ['./add-programmer.component.css']
})
export class AddProgrammerComponent implements OnInit {

  addProgrammerRequest: Programmer = {
    id: '',
    email: '',
    password: '',
    roleId: ''
  }
  constructor(private programmerService: ProgrammersService, private router: Router) {
  }
  ngOnInit(): void {

  }

  addProgrammer(){
    this.programmerService.addProgrammer(this.addProgrammerRequest)
    .subscribe({
      next: (programmer) => {
        this.router.navigate(['programmers']);
      }
    });
  }

}

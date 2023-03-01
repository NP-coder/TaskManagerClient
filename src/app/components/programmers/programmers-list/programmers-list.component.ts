import { Component, OnInit } from '@angular/core';
import { Programmer } from 'src/app/modules/programmer.model';
import { ProgrammersService } from 'src/app/services/programmers.service';

@Component({
  selector: 'app-programmers-list',
  templateUrl: './programmers-list.component.html',
  styleUrls: ['./programmers-list.component.css']
})
export class ProgrammersListComponent implements OnInit {

  programmers: Programmer[] = [];

  constructor(private programmerservise: ProgrammersService){}

  ngOnInit(): void{
    this.programmerservise.getAllProgrammers().subscribe({
      next: (programmers) => {
        this.programmers = programmers;
      },
      error: (response) =>{
        console.log(response);
      }
    });
  }

}

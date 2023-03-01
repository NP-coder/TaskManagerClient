import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammersListComponent } from './programmers-list.component';

describe('ProgrammersListComponent', () => {
  let component: ProgrammersListComponent;
  let fixture: ComponentFixture<ProgrammersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgrammersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgrammersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

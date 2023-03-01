import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProgrammerComponent } from './add-programmer.component';

describe('AddProgrammerComponent', () => {
  let component: AddProgrammerComponent;
  let fixture: ComponentFixture<AddProgrammerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProgrammerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddProgrammerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

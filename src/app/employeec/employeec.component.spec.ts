import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeecComponent } from './employeec.component';

describe('EmployeecComponent', () => {
  let component: EmployeecComponent;
  let fixture: ComponentFixture<EmployeecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

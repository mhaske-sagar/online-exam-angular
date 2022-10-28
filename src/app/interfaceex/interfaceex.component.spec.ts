import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterfaceexComponent } from './interfaceex.component';

describe('InterfaceexComponent', () => {
  let component: InterfaceexComponent;
  let fixture: ComponentFixture<InterfaceexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterfaceexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InterfaceexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

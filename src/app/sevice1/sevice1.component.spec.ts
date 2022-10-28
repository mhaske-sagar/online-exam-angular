import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sevice1Component } from './sevice1.component';

describe('Sevice1Component', () => {
  let component: Sevice1Component;
  let fixture: ComponentFixture<Sevice1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sevice1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sevice1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DyanamicComponent } from './dyanamic.component';

describe('DyanamicComponent', () => {
  let component: DyanamicComponent;
  let fixture: ComponentFixture<DyanamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DyanamicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DyanamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

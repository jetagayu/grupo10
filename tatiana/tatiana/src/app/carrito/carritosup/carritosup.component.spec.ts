import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritosupComponent } from './carritosup.component';

describe('CarritosupComponent', () => {
  let component: CarritosupComponent;
  let fixture: ComponentFixture<CarritosupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritosupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritosupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

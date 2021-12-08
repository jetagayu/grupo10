import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnviosDomicilioComponent } from './envios-domicilio.component';

describe('EnviosDomicilioComponent', () => {
  let component: EnviosDomicilioComponent;
  let fixture: ComponentFixture<EnviosDomicilioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnviosDomicilioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnviosDomicilioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

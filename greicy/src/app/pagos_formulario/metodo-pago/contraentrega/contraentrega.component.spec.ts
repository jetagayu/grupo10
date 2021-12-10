import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContraentregaComponent } from './contraentrega.component';

describe('ContraentregaComponent', () => {
  let component: ContraentregaComponent;
  let fixture: ComponentFixture<ContraentregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContraentregaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContraentregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

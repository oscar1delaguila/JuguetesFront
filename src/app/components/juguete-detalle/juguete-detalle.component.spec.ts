import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugueteDetalleComponent } from './juguete-detalle.component';

describe('StadiumComponent', () => {
  let component: JugueteDetalleComponent;
  let fixture: ComponentFixture<JugueteDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugueteDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JugueteDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugueteListadoComponent } from './juguete-listado.component';

describe('StadiumListComponent', () => {
  let component: JugueteListadoComponent;
  let fixture: ComponentFixture<JugueteListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugueteListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JugueteListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

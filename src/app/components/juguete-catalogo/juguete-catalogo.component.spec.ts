import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugueteCatalogoComponent } from './juguete-catalogo.component';

describe('StadiumListComponent', () => {
  let component: JugueteCatalogoComponent;
  let fixture: ComponentFixture<JugueteCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugueteCatalogoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JugueteCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

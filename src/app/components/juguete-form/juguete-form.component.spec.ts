import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugueteFormComponent } from './juguete-form.component';

describe('JugueteFormComponent', () => {
  let component: JugueteFormComponent;
  let fixture: ComponentFixture<JugueteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugueteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JugueteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

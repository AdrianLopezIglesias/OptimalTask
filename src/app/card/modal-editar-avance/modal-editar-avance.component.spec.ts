import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarAvanceComponent } from './modal-editar-avance.component';

describe('ModalEditarAvanceComponent', () => {
  let component: ModalEditarAvanceComponent;
  let fixture: ComponentFixture<ModalEditarAvanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarAvanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditarAvanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

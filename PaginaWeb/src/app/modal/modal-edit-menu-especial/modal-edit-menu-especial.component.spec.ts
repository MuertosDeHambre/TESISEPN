import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditMenuEspecialComponent } from './modal-edit-menu-especial.component';

describe('ModalEditMenuEspecialComponent', () => {
  let component: ModalEditMenuEspecialComponent;
  let fixture: ComponentFixture<ModalEditMenuEspecialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditMenuEspecialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditMenuEspecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

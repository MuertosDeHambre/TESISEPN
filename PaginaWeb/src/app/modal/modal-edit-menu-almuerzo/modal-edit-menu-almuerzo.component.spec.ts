import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditMenuAlmuerzoComponent } from './modal-edit-menu-almuerzo.component';

describe('ModalEditMenuAlmuerzoComponent', () => {
  let component: ModalEditMenuAlmuerzoComponent;
  let fixture: ComponentFixture<ModalEditMenuAlmuerzoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditMenuAlmuerzoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditMenuAlmuerzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

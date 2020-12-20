import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPromosComponent } from './lista-promos.component';

describe('ListaPromosComponent', () => {
  let component: ListaPromosComponent;
  let fixture: ComponentFixture<ListaPromosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaPromosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPromosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

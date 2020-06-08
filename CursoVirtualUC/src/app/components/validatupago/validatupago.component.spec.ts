import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatupagoComponent } from './validatupago.component';

describe('ValidatupagoComponent', () => {
  let component: ValidatupagoComponent;
  let fixture: ComponentFixture<ValidatupagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidatupagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidatupagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

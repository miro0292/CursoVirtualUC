import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizarpagoComponent } from './realizarpago.component';

describe('RealizarpagoComponent', () => {
  let component: RealizarpagoComponent;
  let fixture: ComponentFixture<RealizarpagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealizarpagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizarpagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

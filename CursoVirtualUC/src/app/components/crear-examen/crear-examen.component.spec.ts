import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearExamenComponent } from './crear-examen.component';

describe('CrearExamenComponent', () => {
  let component: CrearExamenComponent;
  let fixture: ComponentFixture<CrearExamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearExamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

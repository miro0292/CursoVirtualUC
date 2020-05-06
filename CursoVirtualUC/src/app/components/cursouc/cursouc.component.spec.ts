import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursoucComponent } from './cursouc.component';

describe('CursoucComponent', () => {
  let component: CursoucComponent;
  let fixture: ComponentFixture<CursoucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursoucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursoucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

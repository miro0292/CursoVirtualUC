import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostinscripcionComponent } from './postinscripcion.component';

describe('PostinscripcionComponent', () => {
  let component: PostinscripcionComponent;
  let fixture: ComponentFixture<PostinscripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostinscripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostinscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

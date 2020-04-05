import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePopupComponent } from './movie-popup.component';

describe('MoviePopupComponent', () => {
  let component: MoviePopupComponent;
  let fixture: ComponentFixture<MoviePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

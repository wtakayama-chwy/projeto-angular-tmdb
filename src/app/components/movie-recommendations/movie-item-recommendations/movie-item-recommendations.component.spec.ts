import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieItemRecommendationsComponent } from './movie-item-recommendations.component';

describe('MovieItemRecommendationsComponent', () => {
  let component: MovieItemRecommendationsComponent;
  let fixture: ComponentFixture<MovieItemRecommendationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieItemRecommendationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieItemRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateArticleComponent } from './evaluate-article.component';

describe('EvaluateArticleComponent', () => {
  let component: EvaluateArticleComponent;
  let fixture: ComponentFixture<EvaluateArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluateArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluateArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

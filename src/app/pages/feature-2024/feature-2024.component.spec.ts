import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Feature2024Component } from './feature-2024.component';

describe('Feature2024Component', () => {
  let component: Feature2024Component;
  let fixture: ComponentFixture<Feature2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Feature2024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Feature2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

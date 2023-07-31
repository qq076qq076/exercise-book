import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepeatingLinearGradientComponent } from './repeating-linear-gradient.component';

describe('RepeatingLinearGradientComponent', () => {
  let component: RepeatingLinearGradientComponent;
  let fixture: ComponentFixture<RepeatingLinearGradientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepeatingLinearGradientComponent]
    });
    fixture = TestBed.createComponent(RepeatingLinearGradientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

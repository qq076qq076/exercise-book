import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodePlaceComponent } from './code-place.component';

describe('CodePlaceComponent', () => {
  let component: CodePlaceComponent;
  let fixture: ComponentFixture<CodePlaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodePlaceComponent]
    });
    fixture = TestBed.createComponent(CodePlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

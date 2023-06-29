import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityDddComponent } from './city-ddd.component';

describe('CityDddComponent', () => {
  let component: CityDddComponent;
  let fixture: ComponentFixture<CityDddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CityDddComponent]
    });
    fixture = TestBed.createComponent(CityDddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

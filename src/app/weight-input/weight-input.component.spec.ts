import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightInputComponent } from './weight-input.component';

describe('WeightInputComponent', () => {
  let component: WeightInputComponent;
  let fixture: ComponentFixture<WeightInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeightInputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeightInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

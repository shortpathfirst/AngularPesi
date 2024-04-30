import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightShowComponent } from './weight-show.component';

describe('WeightShowComponent', () => {
  let component: WeightShowComponent;
  let fixture: ComponentFixture<WeightShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeightShowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeightShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

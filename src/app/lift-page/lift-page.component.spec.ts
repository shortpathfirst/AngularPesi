import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiftPageComponent } from './lift-page.component';

describe('LiftPageComponent', () => {
  let component: LiftPageComponent;
  let fixture: ComponentFixture<LiftPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiftPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiftPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

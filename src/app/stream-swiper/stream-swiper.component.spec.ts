import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamSwiperComponent } from './stream-swiper.component';

describe('StreamSwiperComponent', () => {
  let component: StreamSwiperComponent;
  let fixture: ComponentFixture<StreamSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreamSwiperComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StreamSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

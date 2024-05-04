import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamSwiperComponent } from './stream-swiper.component';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('StreamSwiperComponent', () => {
  let component: StreamSwiperComponent;
  let fixture: ComponentFixture<StreamSwiperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreamSwiperComponent],
      providers: [provideAnimations()] 
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

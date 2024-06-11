import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperDirective } from '../directives/swiper.directive';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { register } from 'swiper/element/bundle';
import { HomepageComponent } from '../pages/homepage/homepage.component';
import { LiftPageComponent } from '../pages/lift-page/lift-page.component';
import { WorkoutPageComponent } from '../pages/workout-page/workout-page.component';

@Component({
  selector: 'app-stream-swiper',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    CommonModule,
    SwiperDirective,
    HomepageComponent,
    LiftPageComponent,
    WorkoutPageComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './stream-swiper.component.html',
  styleUrl: './stream-swiper.component.css'
})
export class StreamSwiperComponent {
  constructor(){
    register();

  }

  public config: SwiperOptions = {
    modules: [],
    autoHeight:true,
    spaceBetween: 40,
    navigation: true,
    pagination: {clickable: true, dynamicBullets: true},
    slidesPerView: 1,
    initialSlide: 0,

  }
}

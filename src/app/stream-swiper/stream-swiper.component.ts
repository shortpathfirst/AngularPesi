import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, ViewEncapsulation } from '@angular/core';
import { SwiperDirective } from '../directives/swiper.directive';
import { SwiperOptions } from 'swiper/types/swiper-options';
import { register } from 'swiper/element/bundle';
import { HomepageComponent } from '../homepage/homepage.component';
import { LiftPageComponent } from '../lift-page/lift-page.component';

@Component({
  selector: 'app-stream-swiper',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [
    CommonModule,
    SwiperDirective,
    HomepageComponent,
    LiftPageComponent,
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
    autoHeight: false,
    spaceBetween: 40,
    navigation: true,
    pagination: {clickable: true, dynamicBullets: true},
    slidesPerView: 1,
    centeredSlides: true,
    breakpoints: {
      400: {
        slidesPerView: "auto",
        centeredSlides: false
      },
    }
  }
}

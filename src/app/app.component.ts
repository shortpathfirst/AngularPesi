import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeviceDetectorDirective } from './directives/device-detector.directive';
import { StreamSwiperComponent } from './stream-swiper/stream-swiper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DeviceDetectorDirective,StreamSwiperComponent,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularPesi';
}

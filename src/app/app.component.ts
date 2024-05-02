import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeviceDetectorDirective } from './device/device-detector.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DeviceDetectorDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularPesi';
}

import { Directive, HostListener, OnInit } from '@angular/core';
import { DeviceService } from '../device/device.service';
import * as _ from 'lodash';
export enum Device {
  X_SMALL,
  SMALL = 450,
  MEDIUM = 768,
  LARGE = 992,
  X_LARGE = 1200
}

@Directive({
  selector: '[appDeviceDetector]',
  standalone: true
})
export class DeviceDetectorDirective implements OnInit {
  
  private lastDevice!:Device;

  constructor(private deviceService:DeviceService) { } 

  @HostListener('window:resize', ['$event'])
  private _onResize(event:Event) {
    this.triggerDeviceChange((event.target as Window ).innerWidth);
  }
  
  private triggerDeviceChange(width:number){
    let device = Device.X_LARGE;
    
    // Find the device corresponding to the current width
    for (const key in Device) {
      if (!_.isNaN(+key)) {
        continue;
      }
      if (width > +Device[key]) {
        device = +Device[key];
        continue;
      }

      break;
    }
    if (device !== this.lastDevice) {
      this.lastDevice = device;
      this.deviceService.triggerDeviceChanged(device);
    }
  }


  ngOnInit(): void {
    this.triggerDeviceChange(window.innerWidth);
  }

}

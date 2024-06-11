import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeviceService } from '../device/device.service';
import {MatSliderModule} from '@angular/material/slider';
import { WeightService } from '../controller/weight.service';
import { Peso } from '../models/Peso';
import { Device } from '../directives/device-detector.directive';
@Component({
  selector: 'settings',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MatSliderModule,FormsModule],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent {


  heightIndex:number=4.5;
  widthIndex:number=4.5;
  barIndex:number=4.5;

  pesi:Peso[] = this.weightService.getPlatesSet();

  constructor(private deviceService:DeviceService,private weightService:WeightService){
    this.deviceService.getdeviceChangedObservable().subscribe(()=>{
        this.heightIndex=4.5;
        this.widthIndex=4.5;
        this.barIndex=4.5;
      }
    )
  }

  setPlateHeight(event: any) {
    // this.deviceService.getdeviceChangedObservable().subscribe((device:Device)=>{
    //   return;
    // });
    this.deviceService.deviceSettings._showHeight = this.deviceService.defaultSettings._showHeight *25/100*((event.target.value-1/9) -0.5);

  }
  setPlateWidth(event: any) {
    this.deviceService.deviceSettings._showWidth = this.deviceService.defaultSettings._showWidth * 15/100*((event.target.value )-0.5);

  }
  setBarLength(event: any) {
    this.deviceService.deviceSettings._barLength = this.deviceService.defaultSettings._barLength *50/100*((event.target.value-1/9 )-0.5);

  }
  
  reset(){
    this.deviceService.deviceSettings._barLength = this.deviceService.defaultSettings._barLength;
    this.deviceService.deviceSettings._showHeight = this.deviceService.defaultSettings._showHeight;
    this.deviceService.deviceSettings._showWidth = this.deviceService.defaultSettings._showWidth;
    this.heightIndex=4.5;
    this.widthIndex=4.5;
    this.barIndex=4.5;
  }

  toggleWeight(peso: Peso) {//PESO VIENE MODIFICATO USARE OBSERVABLE
    peso.toggleUsable();
  }
  




}

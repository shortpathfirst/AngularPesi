import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeviceService } from '../device/device.service';
import {MatSliderModule} from '@angular/material/slider';
import { WeightService } from '../controller/weight.service';
import { Peso } from '../models/Peso';
@Component({
  selector: 'settings',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,MatSliderModule,FormsModule],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent {


  heightIndex:number=4.5;
  widthIndex:number=2;
  barIndex:number=70;

  pesi:Peso[] = this.weightService.getPlatesSet();

  constructor(private deviceService:DeviceService,private weightService:WeightService){
    
  }

  setPlateHeight(event: any) {
    this.deviceService._showHeight = this.deviceService.D_showHeight *50/100*((event.target.value-1/9) -0.5);
  }
  setPlateWidth(event: any) {
    this.deviceService._showWidth = this.deviceService.D_showWidth *50/100*((event.target.value-1/4 )-0.5);
  }
  setBarLength(event: any) {
    this.deviceService._barLength = this.deviceService.D_barLength *50/100*((event.target.value-1/9 )-0.5);
  }
  
  reset(){
    this.deviceService._barLength= this.deviceService.D_barLength;
    this.deviceService._showHeight= this.deviceService.D_showHeight; 
    this.deviceService._showWidth= this.deviceService.D_showWidth;

    this.heightIndex=5;
    this.widthIndex=2.5;
    this.barIndex=70;
  }

  toggleWeight(peso: Peso) {//PESO VIENE MODIFICATO USARE OBSERVABLE
    peso.toggleUsable();
  }
  




}

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

  oldHeight:number = 0;
  oldWidth:number = 0;
  oldBarLength:number = 0;

  
  heightIndex:number=4.5;
  widthIndex:number=2;
  barIndex:number=70;

  pesi:Peso[] = this.weightService.getPlatesSet();

  constructor(private deviceService:DeviceService,private weightService:WeightService){
    
  }

  /// METODI DA FARE IN % PER CAMBI DI DEVICESERVICE IN LARGE->SMALL
  setPlateHeight(event: any) {
    this.deviceService._showHeight-= this.oldHeight;
    this.oldHeight = event.target.value-4.5;
    this.deviceService._showHeight+=this.oldHeight;
  }
  setPlateWidth(event: any) {
    // this.deviceService._showWidth-= this.oldWidth;
    // this.oldWidth =event.target.value-2.5;
    // this.deviceService._showWidth+=this.oldWidth;

    this.deviceService._showWidth = this.deviceService.D_showWidth *50/100*(event.target.value-1/4 -0.5);
  }

  setBarLength(event: any) {
    this.deviceService._barLength-= this.oldBarLength;
    this.oldBarLength =event.target.value-25;
    this.deviceService._barLength+=this.oldBarLength;
  }
  
  reset(){
    this.deviceService._barLength-= this.oldBarLength;
    this.deviceService._showHeight-= this.oldHeight;
    this.deviceService._showWidth-= this.oldWidth;
    this.oldBarLength=0;
    this.oldWidth=0;
    this.oldHeight=0;
    this.heightIndex=5;
    this.widthIndex=2.5;
    this.barIndex=70;
  }

  toggleWeight(peso: Peso) {//PESO VIENE MODIFICATO USARE OBSERVABLE
    peso.toggleUsable();
  }
  




}

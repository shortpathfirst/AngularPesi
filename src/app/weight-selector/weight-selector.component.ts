import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { WeightService } from '../controller/weight.service';
import { Peso } from '../models/Peso';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio'
import { DeviceService } from '../device/device.service';
import { SettingComponent } from '../setting/setting.component';

@Component({
  selector: 'weight-selector',
  standalone: true,
  imports: [CommonModule,MatTabsModule,MatRadioModule,ReactiveFormsModule,FormsModule,SettingComponent],
  templateUrl: './weight-selector.component.html',
  styleUrl: './weight-selector.component.css'
})
export class WeightSelectorComponent{

  pesi!:Peso[]; //Set in mostra
  
  style!:any;
  hovered:number=-1;
  selectedOption:string="1";
  constructor(private weightService:WeightService,private deviceService:DeviceService){
    this.pesi = weightService.getPlatesSet();
  }

  hoverStyle(color: string){
   this.style = {'backgroundColor': color,'opacity':0.7, 'height.rem':this.height, 'width.rem':this.width,'font-size.rem':this.font+0.5};
   return this.style;
  }
  get width():number{
    return this.deviceService._selectorWidth
  }
  get height():number{
    return this.deviceService._selectorHeight
  }
  get font():number{
    return this.deviceService._font
  }
  get plateSpacing():string {
    return this.deviceService._rastrelliera
  }
  getSelectedTab():number{
    return this.weightService.getSelectedTab();
  }
  changeBar(bar:number){ 
    this.weightService.setBarWeight(bar);
  }

  addWeight(peso:Peso){
    if(this.selectedOption=="2"){
      this.weightService.updateWeight(peso);
      return;
    }
    this.weightService.updateWeight(peso,true);
  }
  getBarWeights():number[]{
    return this.weightService.getBarSet();
  }

}


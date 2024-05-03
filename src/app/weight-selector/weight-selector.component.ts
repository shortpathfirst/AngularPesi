import { CommonModule } from '@angular/common';
import { Component, HostListener} from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { WeightService } from '../controller/weight.service';
import { Peso } from '../models/Peso';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio'
import { DeviceService } from '../device/device.service';
import { SettingComponent } from '../setting/setting.component';
import {MatCheckbox} from '@angular/material/checkbox'

@Component({
  selector: 'weight-selector',
  standalone: true,
  imports: [CommonModule,MatTabsModule,MatRadioModule,ReactiveFormsModule,FormsModule,SettingComponent,MatCheckbox],
  templateUrl: './weight-selector.component.html',
  styleUrl: './weight-selector.component.css'
})
export class WeightSelectorComponent{

  pesi!:Peso[]; //Set in mostra
  
  style!:any;
  hovered:number=-1;
  selectedOption:string="1";
  isCheckBox:boolean = true;


  constructor(private weightService:WeightService,private deviceService:DeviceService){
    this.pesi = weightService.getPlatesSet();
  }

  hoverStyle(color: string){
   this.style = {'backgroundColor': color,'opacity':0.7, 'height.rem':this.height, 'width.rem':this.width,'font-size.rem':this.font+0.5};
   return this.style;
  }
  get width():number{
    return this.deviceService.deviceSettings._selectorWidth;
  }
  get height():number{
    return this.deviceService.deviceSettings._selectorHeight;
  }
  get font():number{
    return this.deviceService.deviceSettings._font;
  }
  get plateSpacing():string {
    return this.deviceService.deviceSettings._rastrelliera;
  }
  getSelectedTab():number{
    return this.weightService.selectedTab;
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
  
  @HostListener('contextmenu', ['$event'])
  removeWeight(peso: Peso,event:Event) {
    this.weightService.removeWeight(peso);
    return false; //Disable context menu
  }

  private timeStart!:number;
  private timeEnd!:number;

  holdStart(){
    this.timeStart = new Date().getSeconds();
  }
  addOrRemove(peso:Peso) {
    this.timeEnd = new Date().getSeconds();
    let timeDiff = (this.timeEnd - this.timeStart);
    if (timeDiff >= 1) {
      this.weightService.removeWeight(peso);
     }
     else this.addWeight(peso);
  }

  getBarWeights():number[]{
    return this.weightService.getBarSet();
  }
  toggleValueCheckBox() {
    this.weightService.toggleCheckBox();
  }

}


import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DeviceService } from '../../device/device.service';

@Component({
  selector: 'default-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './default-button.component.html',
  styleUrl: './default-button.component.css'
})
export class DefaultButtonComponent {
@Input()
type:'submit' | 'button' = 'submit';
@Input()
text:string = 'Submit';
@Input()
bgColor = '#8042b3'
@Input()
color = 'white';
@Input()
fontSizeRem = this.buttonFontSize || 1.3;
@Input() 
widthRem = this.buttonWidth || 12;
@Input() 
heightRem =this.buttonHeight | 3.5;

@Output()
onClick = new EventEmitter();

constructor(private deviceService:DeviceService){

}
get buttonFontSize(){
  return this.deviceService.deviceSettings._buttonFont;
}
get buttonWidth(){
  return this.deviceService.deviceSettings._buttonWidth;
}
get buttonHeight(){
  return this.deviceService.deviceSettings._buttonHeight;
}


}


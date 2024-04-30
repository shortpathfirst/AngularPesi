import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Device, DeviceDetectorDirective } from './device-detector.directive';
@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private _deviceChanged!: BehaviorSubject<Device>; // Missing new
  device!:Device;

  triggerDeviceChanged(device:Device){
    //this._deviceChanged.next(device);
    this.device=device;
    this.resize();
  }
  getdeviceChangedObservable():Observable<Device>{
    return this._deviceChanged.asObservable();
  }

_selectorWidth!:number;
_selectorHeight!:number;
_showWidth!:number;
_showHeight!:number;
_buttonWidth!:number;
_buttonHeight!:number;
_buttonFont!:number;
_font!:number;
_rastrelliera!:string;
_padding:number=7;
_liftPageFont!:number;
_barLength:number=20;
resize(){
  if(this.device==Device.X_SMALL){
    // this._selectorWidth=1.5;
    // this._selectorHeight=5;
    // this._showWidth=1;
    // this._showHeight=5;
    // this._buttonWidth=9;
    // this._buttonHeight=2.5;
    // this._buttonFont=1;
    // this._font=0.8;
    // this._rastrelliera="1500px"
    // this._padding=0;
    // this._liftPageFont=0.7;

    this._selectorWidth=this.D_selectorWidth-1;
    this._selectorHeight=this.D_selectorHeight-3.5;
    this._showWidth=this.D_showWidth-1.5;
    this._showHeight=this.D_showHeight-3.5;
    this._buttonWidth=this.D_buttonWidth-1;
    this._buttonHeight=this.D_buttonHeight-1;
    this._buttonFont=this.D_buttonFont-0.1;
    this._font=this.D_font-0.7;
    this._rastrelliera="1500px";
    this._liftPageFont=this.D_liftPageFont-0.8;
    this._padding = this.D_padding-7;
    this._barLength = this.D_barLength;

  }
  else if(this.device==Device.SMALL){
    // this._selectorWidth=2;
    // this._selectorHeight=6;
    // this._showWidth=1.5;
    // this._showHeight=6.5;
    // this._buttonWidth=9;
    // this._buttonHeight=2.5;
    // this._buttonFont=1;
    // this._font=0.8;
    // this._rastrelliera="1000px"
    // this._padding=0;
    // this._liftPageFont=0.9;

    this._selectorWidth=this.D_selectorWidth-0.5;
    this._selectorHeight=this.D_selectorHeight-2.5;
    this._showWidth=this.D_showWidth-1;
    this._showHeight=this.D_showHeight-2;
    this._buttonWidth=this.D_buttonWidth-1;
    this._buttonHeight=this.D_buttonHeight-1;
    this._buttonFont=this.D_buttonFont-0.1;
    this._font=this.D_font-0.7;
    this._rastrelliera="1000px";
    this._liftPageFont=this.D_liftPageFont-0.7;
    this._padding = this.D_padding-7;
    this._barLength = this.D_barLength;
  }
  else if(this.device==Device.MEDIUM){
    // this._selectorWidth=2.5;
    // this._selectorHeight=8.5;
    // this._showWidth=1.8;
    // this._showHeight=7;
    // this._buttonWidth=9;
    // this._buttonHeight=2.5;
    // this._buttonFont=1.1;
    // this._font=1;
    // this._rastrelliera="900px"
    // this._liftPageFont=1.1;

    this._selectorWidth=this.D_selectorWidth;
    this._selectorHeight=this.D_selectorHeight;
    this._showWidth=this.D_showWidth-0.7;
    this._showHeight=this.D_showHeight-1.5;
    this._buttonWidth=this.D_buttonWidth-1;
    this._buttonHeight=this.D_buttonHeight-1;
    this._buttonFont=this.D_buttonFont;
    this._font=this.D_font-0.5;
    this._rastrelliera=this.D_rastrelliera;
    this._liftPageFont=this.D_liftPageFont-0.4;
    this._padding = this.D_padding;
    this._barLength = this.D_barLength;
  }
  else if(this.device==Device.LARGE || this.device==Device.X_LARGE){ //GO BACK TO DEFAULT
    this._selectorWidth=2.5;
    this._selectorHeight=8.5;
    this._showWidth=2.5;
    this._showHeight=8.5;
    this._buttonWidth=10;
    this._buttonHeight=3.5;
    this._buttonFont=1.1;
    this._font=1.5;
    this._rastrelliera="900px";
    this._padding=7;
    this._liftPageFont=1.5;
    this._barLength = 40; 
  }
}
  get selectorWidth():number{
    return this._selectorWidth
  }
  get selectorHeight():number{
    return this._selectorHeight
  }
  get showWidth():number{
    return this._showWidth
  }
  get showHeight():number{
    return this._showHeight
  }
  get buttonWidth():number{
    return this._buttonWidth
  }
  get buttonHeight():number{
    return this._buttonHeight
  }
  get buttonFont():number{
    return this._buttonFont
  }
  get font():number{
    return this._font
  }
  get rastrelliera():string{
    return this._rastrelliera
  }
  get padding():number{
    return this._padding
  }
  get liftPageFont():number{
    return this._liftPageFont;
  }

D_selectorWidth:number=2.5;
D_selectorHeight:number=8.5;
D_showWidth:number=2.5;
D_showHeight:number=8.5;
D_buttonWidth:number=10;
D_buttonHeight:number=3.5;
D_buttonFont:number=1.1;
D_font:number=1.5;
D_rastrelliera:string="900px";
D_padding:number=7;
D_liftPageFont:number=1.5;
D_barLength:number = 40;
}
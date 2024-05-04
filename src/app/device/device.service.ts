import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Device } from '../directives/device-detector.directive';
import { Settings } from '../models/deviceSettings';
@Injectable({
  providedIn: 'root'
})
export class DeviceService {
  private _deviceChanged!: BehaviorSubject<Device>; 
  
  device!:Device; //dovrei usare subscribe
  deviceSettings:Settings = this.getSettingsFromLocalStorage();
  defaultSettings:Settings = new Settings();

  constructor(){
    this._deviceChanged = new BehaviorSubject(this.device);
  }
  triggerDeviceChanged(device:Device){
    this.device=device;
    this.resize();
    this._deviceChanged.next(device);
  }
  getdeviceChangedObservable():Observable<Device>{ 
    return this._deviceChanged.asObservable();
  }

resize(){
  if(this.device==Device.X_SMALL){
    this.deviceSettings._selectorWidth=1.5;
    this.deviceSettings._selectorHeight=5;
    this.deviceSettings._showWidth=1;
    this.deviceSettings._showHeight=5;
    this.deviceSettings._buttonWidth=9;
    this.deviceSettings._buttonHeight=2.5;
    this.deviceSettings._buttonFont=1;
    this.deviceSettings._font=0.8;
    this.deviceSettings._rastrelliera="1500px"
    this.deviceSettings._liftPageFont=0.7;
    this.deviceSettings._barLength = 4; 
  }
  else if(this.device==Device.SMALL){
    this.deviceSettings._selectorWidth=2;
    this.deviceSettings._selectorHeight=6;
    this.deviceSettings._showWidth=1.5;
    this.deviceSettings._showHeight=6.5;
    this.deviceSettings._buttonWidth=9;
    this.deviceSettings._buttonHeight=2.5;
    this.deviceSettings._buttonFont=1;
    this.deviceSettings._font=0.8;
    this.deviceSettings._rastrelliera="1000px"
    this.deviceSettings._liftPageFont=0.9;
    this.deviceSettings._barLength = 6; 
  }
  else if(this.device==Device.MEDIUM){
    this.deviceSettings._selectorWidth=2.5;
    this.deviceSettings._selectorHeight=8.5;
    this.deviceSettings._showWidth=1.8;
    this.deviceSettings._showHeight=7;
    this.deviceSettings._buttonWidth=9;
    this.deviceSettings._buttonHeight=2.5;
    this.deviceSettings._buttonFont=1.1;
    this.deviceSettings._font=1;
    this.deviceSettings._rastrelliera="900px"
    this.deviceSettings._liftPageFont=1.1;
    this.deviceSettings._barLength = 10; 
  }
  else if(this.device==Device.LARGE || this.device==Device.X_LARGE){ //GO BACK TO DEFAULT
    this.deviceSettings._selectorWidth=2.5;
    this.deviceSettings._selectorHeight=8.5;
    this.deviceSettings._showWidth=2.5;
    this.deviceSettings._showHeight=8.5;
    this.deviceSettings._buttonWidth=10;
    this.deviceSettings._buttonHeight=3.5;
    this.deviceSettings._buttonFont=1.1;
    this.deviceSettings._font=1.5;
    this.deviceSettings._rastrelliera="900px";
    this.deviceSettings._liftPageFont=1.5;
    this.deviceSettings._barLength = 20; 
  }
}

private setSettingsToLocalStorage(){
  localStorage.setItem('Settings',JSON.stringify(this.deviceSettings));
}

private getSettingsFromLocalStorage():Settings{
  const settingJson = localStorage.getItem('Settings');
  return settingJson? JSON.parse(settingJson):new Settings();//if there's no value to localstorage
}
}
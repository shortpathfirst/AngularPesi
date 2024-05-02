import { Device } from "../device/device-detector.directive";
import { DeviceService } from "../device/device.service";

export class DeviceSettings{

    constructor(private deviceService:DeviceService){
        

    }

    observeChange(deviceService:DeviceService){
        deviceService.getdeviceChangedObservable().subscribe((device: Device) =>{
            return;
        });
    }
        
}
export class Settings{
    _selectorWidth:number=2.5;
    _selectorHeight:number=8.5;
    _showWidth:number=2.5;
    _showHeight:number=8.5;
    _buttonWidth:number=10;
    _buttonHeight:number=3.5;
    _buttonFont:number=1.1;
    _font:number=1.5;
    _rastrelliera:string="900px";
    _liftPageFont:number=1.5;
    _barLength:number=20;
}

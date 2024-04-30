import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WeightShowComponent } from '../weight-show/weight-show.component';
import { DeviceService } from '../device/device.service';
import { DeviceDetectorDirective } from '../device/device-detector.directive';
import { WeightService } from '../controller/weight.service';
import { ReactiveFormsModule} from '@angular/forms';
import { DefaultButtonComponent } from '../partials/default-button/default-button.component';
import { Lift } from '../models/Lift';
import { LiftPageService } from '../controller/lift-page.service';



@Component({
  selector: 'app-lift-page',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,DefaultButtonComponent,WeightShowComponent,DeviceDetectorDirective],
  templateUrl: './lift-page.component.html',
  styleUrl: './lift-page.component.css'
})
export class LiftPageComponent implements OnInit,AfterViewChecked{

  deviceWidth!:number;
  newLift:boolean = false;
  weightList!:Lift[];

  @ViewChild('scrollMe') private myScrollContainer!:ElementRef;

  constructor(private deviceService:DeviceService,private liftService:LiftPageService){
    this.liftService.getLiftObservable().subscribe((lift)=>{this.weightList=lift;})
  }
  ngAfterViewChecked(): void {
    if(this.newLift){
      this.scrollToBottom();
      this.newLift = false;
    }
  }
  ngOnInit(): void {
    this.liftService.getLiftObservable().subscribe((lift)=>{this.weightList=lift;})
  } 
  scrollToBottom(){
    try{
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    }catch(err){}
  }

  getfontLiftPage():number{
    return this.deviceWidth=this.deviceService.liftPageFont;
  }
  addWeight(){
    this.newLift = true;
    let id = this.liftService.getLastID()+1;
    this.liftService.addLift({title:"New",
    total:60,
    set:"0",
    rep:"0",
    id:id
  });
  }
  updateTitle(id:number,title:string){
    this.liftService.updateTitle(id,title);
  }
  updateTotal(id:number,total:string){
    this.liftService.updateTotal(id,total);
  }
  updateSet(id:number,set:string){
    this.liftService.updateSet(id,set);
  }
  updateRep(id:number,rep:string){
    this.liftService.updateRep(id,rep);
  }
}


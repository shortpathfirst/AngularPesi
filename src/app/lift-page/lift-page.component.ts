import { CommonModule } from '@angular/common';
import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WeightShowComponent } from '../weight-show/weight-show.component';
import { DeviceService } from '../device/device.service';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { DefaultButtonComponent } from '../partials/default-button/default-button.component';
import { Lift } from '../models/Lift';
import { LiftPageService } from '../controller/lift-page.service';



@Component({
  selector: 'app-lift-page',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,FormsModule,DefaultButtonComponent,WeightShowComponent],
  templateUrl: './lift-page.component.html',
  styleUrl: './lift-page.component.css'
})
export class LiftPageComponent implements OnInit,AfterViewChecked{

  deviceWidth!:number;
  newLift:boolean = false;
  weightList!:Lift[];
  descriptionForm!: FormGroup;

  @ViewChild('scrollMe') private myScrollContainer!:ElementRef;


  constructor(private deviceService:DeviceService,private liftService:LiftPageService,private formBuilder:FormBuilder){
    this.liftService.getLiftObservable().subscribe((lift)=>{this.weightList=lift;})
  }
  ngAfterViewChecked(): void {
    if(this.newLift){
      this.scrollToBottom();
      this.newLift = false;
    }
  }
  ngOnInit(): void { 
    this.liftService.getLiftObservable().subscribe((lift)=>{this.weightList=lift;});
  } 

  get fc(){
    return this.descriptionForm.controls;
  }
  scrollToBottom(){
    try{
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    }catch(err){}
  }

  getfontLiftPage():number{
    return this.deviceWidth=this.deviceService.deviceSettings._liftPageFont;
  }
  addWeight(){
    this.newLift = true;
    this.liftService.addNewLift();
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
  remove(id:number){
    this.liftService.remove(id);
  }

}


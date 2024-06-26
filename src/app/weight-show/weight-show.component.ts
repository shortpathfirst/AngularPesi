import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import { Peso, Size } from '../models/Peso';
import { ReactiveFormsModule } from '@angular/forms';
import { WeightService } from '../controller/weight.service';
import { WeightInputComponent } from '../weight-input/weight-input.component';
import { DeviceService } from '../device/device.service';


@Component({
  selector: 'weight-show',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,WeightInputComponent],
  templateUrl: './weight-show.component.html',
  styleUrl: './weight-show.component.css',
})

export class WeightShowComponent implements OnInit,AfterViewInit,OnChanges {
  pesi:Peso[] = []; //Pesi attualmente in mostra
  barbell!:number;
  @Input()
  totale!:number;

  @ViewChild('divBilanciere',{static:false})
  bilanciereRef!:ElementRef;

  constructor(private weightService:WeightService, private deviceService:DeviceService){ }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.totale){ //Liftpage ha totale inizializzato
        this.pesi=this.weightService.caricaPesi(this.totale,true); //SI OCCUPA SOLO DELLA VIEW
    }
  }
  ngAfterViewInit(): void {
    this.centerScrollbar();
  }
  ngOnInit(): void {
    if(isNaN(this.totale) ){
      this.weightService.getWeightObservable().subscribe((valore)=>{
        this.pesi = valore.pesi;
        this.centerScrollbar();
      });
    }
  }
  private centerScrollbar(){
    if(!this.bilanciereRef) return;

    let scrollWid = this.bilanciereRef.nativeElement.scrollWidth; 
    let clientWid = this.bilanciereRef.nativeElement.clientWidth
  
    if(scrollWid>clientWid && scrollWid && clientWid)  //Esiste scrollbar
      this.bilanciereRef.nativeElement.scrollTo((scrollWid-clientWid)/2,0);
  }
  getWidthForWeight(width:number):number{
    return this.deviceService.deviceSettings._showWidth*width; 
  }
  getHeightForWeight(height:number):number{
    return this.deviceService.deviceSettings._showHeight*height;
    ;
  }
  getBarLength():number{
    return this.deviceService.deviceSettings._barLength;
  }
  getFontSize():number{
    return this.deviceService.deviceSettings._font;
  }

  getBarbell(){
    return this.barbell=this.weightService.getBarWeight();
  }
  activateTabPlate(){
    this.weightService.selectedTab = 0;
  }
  activateTabBar(){
    this.weightService.selectedTab = 1;
  }
  getWeightText(value:number,size:Size):string{
    let isTextChecked = this.weightService.isTextChecked;
    if(!isTextChecked || size!=Size.LARGE) return "";
    return ""+value;
  }
}
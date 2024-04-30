import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import { Peso } from '../models/Peso';
import { InputContainerComponent } from '../partials/input-container/input-container.component';
import { DefaultButtonComponent } from '../partials/default-button/default-button.component';
import { TextInputComponent } from '../partials/text-input/text-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WeightService } from '../controller/weight.service';
import { WeightInputComponent } from '../weight-input/weight-input.component';
import { DeviceService } from '../device/device.service';


@Component({
  selector: 'weight-show',
  standalone: true,
  imports: [CommonModule,InputContainerComponent,DefaultButtonComponent,TextInputComponent,ReactiveFormsModule,WeightInputComponent],
  templateUrl: './weight-show.component.html',
  styleUrl: './weight-show.component.css',
})

export class WeightShowComponent implements OnInit,AfterViewInit,OnChanges {
  pesi:Peso[] = []; //Pesi attualmente in mostra

  @Input()
  totale!:number;

  @ViewChild('divBilanciere',{static:false})
  bilanciereRef!:ElementRef;

  public setTotale(){}

  constructor(private weightService:WeightService, private deviceService:DeviceService){ 
    if(!this.totale){
      this.weightService.getWeightObservable().subscribe((valore)=>{
        this.pesi = valore.pesi;
        this.centerScrollbar();
      })
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.totale){ //Liftpage ha totale inizializzato
        this.pesi=this.weightService.caricaPesi(this.totale,true); //SI OCCUPA SOLO DELLA VIEW
    }
  }
  ngAfterViewInit(): void {
    this.centerScrollbar();
  }
  ngOnInit(): void {
  }
  private centerScrollbar(){
    if(!this.bilanciereRef) return;

    let scrollWid = this.bilanciereRef.nativeElement.scrollWidth; 
    let clientWid = this.bilanciereRef.nativeElement.clientWidth
  
    if(scrollWid>clientWid && scrollWid && clientWid)  //Esiste scrollbar
      this.bilanciereRef.nativeElement.scrollTo((scrollWid-clientWid)/2,0);
  }
  getWidthForWeight(width:number):number{ //in proporzione
    return this.deviceService._showWidth
  }
  getHeightForWeight(height:number):number{//in proporzione
    return this.deviceService._showHeight
  }
  getBarLength():number{
    return this.deviceService._barLength
  }
  getFontSize():number{
    return this.deviceService._font
  }

  get barbell(){
    return this.weightService.getBarWeight();
  }
  activateTabPlate(){
    this.weightService.selectedTab = 0;
  }
  activateTabBar(){
    this.weightService.selectedTab = 1;
  }
}
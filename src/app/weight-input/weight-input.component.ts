import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputContainerComponent } from '../partials/input-container/input-container.component';
import { DefaultButtonComponent } from '../partials/default-button/default-button.component';
import { TextInputComponent } from '../partials/text-input/text-input.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { WeightService } from '../controller/weight.service';
import { DeviceService } from '../device/device.service';
@Component({
  selector: 'weight-input',
  standalone: true,
  imports: [CommonModule,InputContainerComponent,DefaultButtonComponent,TextInputComponent,ReactiveFormsModule],
  templateUrl: './weight-input.component.html',
  styleUrl: './weight-input.component.css'
})
export class WeightInputComponent implements OnInit {
  pesoForm!:FormGroup;
  isSubmitted = false;

  constructor(private formBuilder:FormBuilder,private weightService:WeightService,private deviceService:DeviceService){

  }
  ngOnInit(): void {
    this.pesoForm =  this.formBuilder.group({
      peso:['',[Validators.min(this.weightService.getBarWeight()),Validators.max(32000),Validators.pattern('^[0-9]*$')]],
    });
  }
  get fc(){
    return this.pesoForm.controls;
  }
    
  submit(){
    this.isSubmitted = true;
    setTimeout(()=>{this.isSubmitted = false;},5000);
    
    if(this.pesoForm.invalid) return;

    this.weightService.caricaPesi(+this.fc['peso'].value);
  }
  reset(){
    this.weightService.resetWeight();
    this.fc['peso'].reset();
  }
  optimize(){
    this.weightService.caricaPesi(this.weightService.getTotal());
  }
  get buttonFontSize(){
    return this.deviceService._buttonFont
  }
  get buttonWidth(){
    return this.deviceService._buttonWidth
  }
  get buttonHeight(){
    return this.deviceService._buttonHeight
  }

}

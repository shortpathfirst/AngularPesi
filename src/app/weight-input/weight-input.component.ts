import { Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputContainerComponent } from '../partials/input-container/input-container.component';
import { DefaultButtonComponent } from '../partials/default-button/default-button.component';
import { TextInputComponent } from '../partials/text-input/text-input.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { WeightService } from '../controller/weight.service';

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

  constructor(private formBuilder:FormBuilder,private weightService:WeightService){

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
    if(this.pesoForm.invalid){ this.isSubmitted=true; return;}
    
    this.weightService.caricaPesi(+this.fc['peso'].value);
    this.isSubmitted = false;
  }
  reset(){
    this.weightService.resetWeight();
    this.fc['peso'].reset();
  }
  optimize(){
    this.weightService.caricaPesi(this.weightService.getTotal());
  }

}

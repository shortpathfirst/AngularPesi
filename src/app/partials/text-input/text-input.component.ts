import { Component, Input, OnInit } from '@angular/core';
import { InputValidationComponent } from '../input-validation/input-validation.component';
import { InputContainerComponent } from '../input-container/input-container.component';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'text-input',
  standalone: true,
  imports: [CommonModule,InputValidationComponent,InputContainerComponent,ReactiveFormsModule],
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.css'
})
export class TextInputComponent implements OnInit{

  @Input()
  control!:AbstractControl;
  @Input()
  showErrorsWhen:boolean = false;
  @Input()
  label!:string;
  @Input()
  type = 'text' 
  
  get formControl(){ 
    return this.control as FormControl;
  }
  ngOnInit(): void {
    
  }
}

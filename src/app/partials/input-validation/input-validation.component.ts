import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';

const VALIDATOR_MESSAGES:any={
  min:"The bar has weight",
  max:"Wooahh.. chill",
  pattern:'Only numbers'
}
@Component({
  selector: 'input-validation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-validation.component.html',
  styleUrl: './input-validation.component.css'
})
export class InputValidationComponent implements OnInit, OnChanges {
    
    @Input()
    control!:AbstractControl;
    @Input()
    showErrorWhen:boolean = true; 
    
    errorMessages:string[] = [];
  
  ngOnChanges(changes: SimpleChanges): void {
    this.checkValidation();
  }
  ngOnInit(): void {
    this.control.statusChanges.subscribe(() =>{
      this.checkValidation();
    });
    this.control.valueChanges.subscribe(() =>{
      this.checkValidation();
    });
  } 

  checkValidation(){ //Fill the errorMessage
    const errors = this.control.errors;
    if(!errors){
      this.errorMessages = []
      return;
    }
    const errorKeys = Object.keys(errors);

    this.errorMessages = errorKeys.map(key =>VALIDATOR_MESSAGES[key]);
  
  }


}

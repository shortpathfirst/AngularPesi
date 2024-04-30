import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'input-container',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-container.component.html',
  styleUrl: './input-container.component.css'
})
export class InputContainerComponent {

  @Input()
  label!:string;
  @Input()
  bgColor = 'rgb(238, 186, 243)';

  constructor(){}


}

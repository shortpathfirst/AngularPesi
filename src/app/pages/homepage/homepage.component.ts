import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { WeightShowComponent } from '../../weight-show/weight-show.component';
import { WeightSelectorComponent } from '../../weight-selector/weight-selector.component';
import { WeightInputComponent } from '../../weight-input/weight-input.component';
import { WeightService } from '../../controller/weight.service';
import { Device } from '../../directives/device-detector.directive';

import { Router } from '@angular/router';
import { DeviceService } from '../../device/device.service';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, WeightShowComponent,WeightSelectorComponent,WeightInputComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent implements OnInit {

  total!: number;
  color:string="black";
  fontRem:number=3;


  effectTotal(){
    this.color="#6495ed";
    this.fontRem=5;
    setTimeout(()=>{
      this.color="black";
      this.fontRem=3.5;
    },200);
  }

  constructor(weightService:WeightService,private router:Router,private deviceService:DeviceService){
    weightService.getWeightObservable().subscribe((valore)=>{this.total = valore.total; this.effectTotal();})
  }
  ngOnInit(): void {
    this.deviceService.getdeviceChangedObservable().subscribe((device:Device)=>{
      if(device == Device.SMALL || device == Device.X_SMALL){}
        //padding
   
    });
  }
  
  // import { motion, useAnimationControls } from "framer-motion"
//   <motion.div
//   animate={controls}
//   transition={{ times: [0, 0.05, 0.95] }}
// >
//   <Tooltip title={toolTipText} enterTouchDelay={0} arrow>
//       <h1 className='card--header-total'>{totalWeight} lb</h1>
//   </Tooltip>
// </motion.div>

    // // Animation
    // const controls = useAnimationControls()
    // useEffect(() => {
    //     controls.start({
    //         scale: [1, 1.2, 1],
    //         translateY: ['0px', '-5px', '5px'],
    //         color: ["#000000", "#67a074", "#000000"]
    //     });
    // }, [controls, totalWeight]);

 


}
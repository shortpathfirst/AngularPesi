import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Workout, WorkoutItem } from '../../models/Workout';
import { WeightShowComponent } from '../../weight-show/weight-show.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { listaW, listaWork } from '../../models/const/mockEntries';
@Component({
  selector: 'app-workout-page',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule,WeightShowComponent,MatIconModule,MatButtonModule],
  templateUrl: './workout-page.component.html',
  styleUrl: './workout-page.component.css'
})
export class WorkoutPageComponent {

  workouts:Workout[];

  indexClicked:boolean[][]=[];
  isModificable:boolean=true;
  modifyColor:string='inherit';
  setModify(){
    this.isModificable = !this.isModificable;
    if(!this.isModificable)
      this.modifyColor='purple';
    else
      this.modifyColor='inherit';
   this.resetIndex();
  }
  resetIndex(){
    for(let j=0; j<this.workouts.length; j++){
      this.indexClicked[j] = [];
    }
  }
  constructor(){
    const w1 = new Workout("Squat",listaWork,170);
    const w2 = new Workout("Bench",listaW,100);
    const w3 = new Workout("Deadlift",listaWork,180);
    this.workouts = [w1,w2,w3,w1];
    this.resetIndex();
  }
setIntensity(w:Workout,ex:WorkoutItem,value:string){
  if(!Number(+value) || +value>100 || +value<1) return;
  ex.relInt = +value;
  w.completeItem();
}
setReps(w:Workout,ex:WorkoutItem,value:string){
  if(!Number(+value) || +value>9 || +value<1 || +value%1!=0) return;
  ex.reps = +value;
  w.completeItem();
}
setSets(w:Workout,ex:WorkoutItem,value:string){
  if(!Number(+value) || +value<1 || +value%1!=0) return;
  ex.sets = +value;
  w.completeItem();
}
setMaxLift(work:Workout,value:string){
  if(!Number(+value) || +value<1 || +value%1!=0) return;

  work.maxLift=+value;
  work.completeItem();
}

getColor(workout:WorkoutItem):string{
  if(workout.relInt<70){
    return "rgb(201, 222, 230)";
  }
  else if(workout.relInt<=80){
      return "lightblue";
  }else if(workout.relInt<93){
      return "rgb(126, 198, 223)";
  }
  return "rgb(72, 181, 218)";
}
  private setLiftToLocalStorage(){
    localStorage.setItem('Workout',JSON.stringify(this.workouts));
  }

  private getLiftFromLocalStorage():Workout[]{
    const liftJson = localStorage.getItem('Workout');
    const baseWorkout = new Workout("Squat",listaWork,100);
    return liftJson ? JSON.parse(liftJson): baseWorkout; //if there's no value to localstorage
  }
}

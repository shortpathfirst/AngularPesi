export class Workout{

    private orderState = false;

    constructor(private _name:string,private _workout:WorkoutItem[],private _maxLift:number){
        this.updateItem();
    }

    get name(){
        return this._name;
    }
    get workout(){
        return this._workout;
    }
    get maxLift(){
        return this._maxLift;
    }

    public set name(value: string) {
        this._name = value;
    }
    public set workout(value: WorkoutItem[]) {
        this._workout = value;
    }
    public set maxLift(value: number) {
        this._maxLift = value;
    }
    
    updateItem(){
        for(const item of this.workout){
            this.calcReal(item); //must value first
            this.calcKg(item);
            this.calcInol(item);
            this.calcVolume(item);
        }
    }
    reorder(){
        
        if(this.orderState)
         this.workout=this.workout.sort((a,b)=>a.relInt-b.relInt);
        else
        this.workout= this.workout.sort((b,a)=>a.relInt-b.relInt);

        this.orderState=!this.orderState;

        
    }
    private calcReal(workout:WorkoutItem){
        if(Number(workout.reps) || workout.reps>0 || workout.reps<10){
            workout.real = prilepinChart[workout.reps-1]*workout.relInt;
            workout.real=+workout.real.toFixed(1);
        }
    }
    private calcKg(workout:WorkoutItem){
        workout.kg = this.maxLift*workout.real! /100; 
        workout.kg=+workout.kg.toFixed(0);
    }
    private calcInol(workout:WorkoutItem){
        workout.inol = workout.sets * workout.reps / (100-workout.real!);
        workout.inol=+workout.inol.toFixed(2);
    }
    private calcVolume(workout:WorkoutItem){
        workout.volume =workout.sets * workout.reps * workout.real!;
        workout.volume=+workout.volume.toFixed(0);
    }

}
export class WorkoutItem{
    sets!:number;
    reps!:number;
    relInt!:number;
    real?:number;
    kg?:number;
    inol?:number;
    volume?:number;
}

export const prilepinChart = [
    1,
    0.95,
    0.92,
    0.89,
    0.86,
    0.83,
    0.81,
    0.79,
    0.75];
    

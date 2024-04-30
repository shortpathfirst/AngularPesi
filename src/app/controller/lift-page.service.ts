import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Lift } from '../models/Lift';

@Injectable({
  providedIn: 'root'
})
export class LiftPageService {

  tot!:number[];
  liftList!:Lift[]; 
  private liftSubject = new BehaviorSubject<Lift[]>(this.liftList); //use getLiftFromLocalStorage
  public liftObservable:Observable<Lift[]>;

  constructor() { 
    this.liftList=this.weightList2;
    this.liftSubject.next(this.liftList);
    this.liftObservable = this.liftSubject.asObservable();
  }
  addLift(lift:Lift){
    this.liftList.push(lift);
    this.liftSubject.next(this.liftList);
  }
  getLastID() {
    return this.liftList[this.liftList.length-1].id;
  }
  getLiftObservable():Observable<Lift[]>{ 
    return this.liftSubject.asObservable();
  }

  updateTitle(id: number, title: string) {
    let lift = this.liftList.find(lift => lift.id == id);
    if(lift)
      lift.title = title;
  }
  updateRep(id: number, rep: string) {
    let lift = this.liftList.find(lift => lift.id == id);
    if(lift)
      lift.rep = rep;
  }
  updateSet(id: number, set: string) {
    let lift = this.liftList.find(lift => lift.id == id);
    if(lift)
      lift.set = set;
  }
  updateTotal(id: number, total: string) {
    let lift = this.liftList.find(lift => lift.id == id);
    if(!lift)  return;
    if(!Number(total) || +total<20 || +total>3200)
      lift.total = 20;
    
    lift.total = +total;
  }
  private setUserToLocalStorage(lift:Lift){
    localStorage.setItem('Lift',JSON.stringify(lift));
  }

  private getUserFromLocalStorage():Lift{
    const liftJson = localStorage.getItem('Lift');
    if(liftJson) return JSON.parse(liftJson) as Lift;
    return new Lift(); //if there's no value to localstorage
  }

  private weightList2=[
    {title:"Squat",
      total:140,
      set:"3",
      rep:"5",
      id:0,
    },
    {title:"Bench",
      total:105,
      set:"3",
      rep:"5",
      id:1,
    },
    {title:"Deadlift",
      total:165,
      set:"1",
      rep:"5",
      id:2,
    },
  ];
}

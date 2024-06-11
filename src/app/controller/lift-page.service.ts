import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Lift } from '../models/Lift';
import { weightList2 } from '../models/const/mockEntries';
@Injectable({
  providedIn: 'root'
})
export class LiftPageService {
 
  tot!:number[];
  liftList:Lift[] =this.getLiftFromLocalStorage();
  private liftSubject = new BehaviorSubject<Lift[]>(this.liftList);

  constructor() { 
  }
  addNewLift(){
    let id = this.getLastID()+1;
    this.liftList.push({title:"New", total:60, set:"0",rep:"0",id:id});
    this.liftSubject.next(this.liftList);
    this.setLiftToLocalStorage();
  }
  getLastID():number { //List could have id holes
    return this.liftList.length > 0 ? this.liftList[this.liftList.length-1].id : -1;
  }
  getLiftObservable():Observable<Lift[]>{ 
    return this.liftSubject.asObservable();
  }

  updateTitle(id: number, title: string) {
    let lift = this.liftList.find(lift => lift.id == id);
    if(lift)
      lift.title = title;
    this.setLiftToLocalStorage();
  }
  updateRep(id: number, rep: string) {
    let lift = this.liftList.find(lift => lift.id == id);
    if(lift)
      lift.rep = rep;
    this.setLiftToLocalStorage();
  }
  updateSet(id: number, set: string) {
    let lift = this.liftList.find(lift => lift.id == id);
    if(lift)
      lift.set = set;
    this.setLiftToLocalStorage();
  }
  updateTotal(id: number, total: string) {
    let lift = this.liftList.find(lift => lift.id == id);
    
    if(!lift || !Number(total) || +total<20 || +total>3200) 
      return;
    
    lift.total = +total;
    this.setLiftToLocalStorage();
  }
  remove(id: number) {
    const lift = this.liftList.find(lift => lift.id == id);
    if(!lift) return;
    const index = this.liftList.indexOf(lift);
    if(index ===-1) return;
    this.liftList.splice(index,1);
    this.setLiftToLocalStorage();
  }
  private setLiftToLocalStorage(){
    localStorage.setItem('Lift',JSON.stringify(this.liftList));
    this.liftSubject.next(this.liftList);
  }

  private getLiftFromLocalStorage():Lift[]{
    const liftJson = localStorage.getItem('Lift');
    return liftJson ? JSON.parse(liftJson): weightList2; //if there's no value to localstorage
  }


}

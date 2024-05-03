import { Injectable } from '@angular/core';
import { Peso } from '../models/Peso';
import { Stack } from '../models/Stack';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeightService {

  private _selectedTab = 0; //Click on weights

  checkedWeightText:boolean=true;

  private stack:Stack = new Stack(); // HOME PAGE
  private weightSubject: BehaviorSubject<Stack> = new BehaviorSubject(this.stack); 

  constructor(){
    this.initStack();
  }

  initStack(){
    this.stack.pesi= [];
    this.stack.pesi.push(Stack.GREEN);
    this.stack.pesi.push(Stack.YELLOW);
    this.stack.pesi.push(Stack.BLUE);
    this.stack.pesi.push(Stack.RED);
    this.stack.pesi.push(Stack.RED);
    this.stack.pesi.push(Stack.RED);
    this.stack.total = 260;
    this.stack.barbell=20;
  }

  getWeightObservable():Observable<Stack>{ 
    return this.weightSubject.asObservable();
  }
  get pesi():Peso[]{
    return this.weightSubject.value.pesi;
  }

  public get selectedTab() {
    return this._selectedTab;
  }
  public set selectedTab(value) {
    this._selectedTab = value;
  }
  toggleCheckBox(){
    this.checkedWeightText = !this.checkedWeightText;
  }
  getPlatesSet():Peso[]{ 
    return Stack.defaultSet;
  }
  getBarSet():number[]{
    return Stack.BarSet;
  }
  getBarWeight(){
    return this.stack.barbell;
  }
  getTotal(){
    return this.stack.total;
  }
  setBarWeight(newBarbell:number){
    if(this.stack.barbell != newBarbell){
      this.stack.barbell=newBarbell;
      this.caricaPesi(this.stack.total);
      this.weightSubject.next(this.stack);
    }
  }
  resetWeight(){
    this.stack = new Stack();
    this.initStack();
    this.weightSubject.next(this.stack);
  }
  updateWeight(peso:Peso,inOrder?:boolean){ //inOrder = true addWeightInOrder
    if(!peso.isUsable()) return;
    let kg = peso.valore; 
    this.stack.total+=kg*2;
    inOrder ? this.addKgInOrder(peso) : this.stack.pesi.unshift(peso);
    this.weightSubject.next(this.stack); 
  }

 private addKgInOrder(peso:Peso){ 
    let index=0;
    let found =  false;
    for(let i=0; i<this.stack.pesi.length; i++){
        if(this.stack.pesi[i].valore <= peso.valore){
            index=i;
            found = true;
        }
    }
    found ?this.stack.pesi.splice(index+1,0,peso):this.stack.pesi.unshift(peso);
  }

caricaPesi(valoreStack:number,liftpage?:boolean):Peso[]{ //liftpage = true non agisce solo sulla view //come commento speciale
  
  let refStack:Stack;
  liftpage ? refStack=new Stack() : refStack = this.stack; //To get the barbell
  refStack.pesi=[];
  refStack.total=valoreStack;
  let stack = (refStack.total-refStack.barbell)/2;
  this.loadStack(stack,refStack);

  if(liftpage)return refStack.pesi;
  this.weightSubject.next(this.stack = refStack); 
  return refStack.pesi;

}

  private loadStack(stack:number,oggettoStack:Stack){ //riferimento al oggetto stack
    for(let peso of Stack.plates){
      if(peso.isUsable() && stack >= peso.valore){
        let numPesi = Math.floor(stack/peso.valore);
        stack-=numPesi*peso.valore;
        while(numPesi>0){
          oggettoStack.pesi.unshift(peso);
          numPesi--;
        }
      }
    }
  }

removeWeight(peso: Peso) {
  let index=0;
  let found =  false;
  for(let i=0; i<this.stack.pesi.length; i++){
      if(this.stack.pesi[i].valore == peso.valore){
          index=i;
          found = true;
      }
  }
  if(!found) return;
  
  this.stack.pesi.splice(index,1);
  let kg = peso.valore; 
  this.stack.total-=kg*2;
  
  this.weightSubject.next(this.stack); 
}
}
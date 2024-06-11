import { Peso } from "./Peso";

export class Stack{

    static readonly RED = new Peso(25,"red",true,1);
    static readonly BLUE = new Peso(20,"blue",true,2);
    static readonly YELLOW = new Peso(15,"yellow",true,3);
    static readonly GREEN = new Peso(10,"green",true,4);
    static readonly WHITE = new Peso(5,"white",true,5);
    static readonly BLACK = new Peso(2.5,"dimgray",true,6);
    static readonly ONE = new Peso(1,"gray",true,7);
    static readonly HALFONE = new Peso(0.5,"lightgray",true,8);

    static readonly plates= [
        Stack.RED,
        Stack.BLUE,
        Stack.YELLOW,
        Stack.GREEN,
        Stack.WHITE,
        Stack.BLACK,
        Stack.ONE,
        Stack.HALFONE];

    static readonly barSet:number[] = [10,12,15,20];

    pesi:Peso[] = []; //pesi usati
    barbell:number=20;
    total:number=260; //with bar
    
}
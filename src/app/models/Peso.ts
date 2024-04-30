export class Peso{
    //kg//lbs
    height:string="4rem"; //make it private
    width:string="1rem";

    // height:string="8.5rem"; //make it private
    // width:string="2rem";
    constructor(
        private kg:number,
        private colour:string, 
        private usable:boolean,
        private id:number,
    ){}

    get valore(){
        return this.kg;
    }
    get color(){
        return this.colour;
    }
    isUsable():boolean{
        return this.usable;
    }
    getHeight():string{
        return this.height;
    }
    getWidth():string{
        return this.width;
    }
    toggleUsable():boolean{
        return this.usable = !this.usable;
    }

}
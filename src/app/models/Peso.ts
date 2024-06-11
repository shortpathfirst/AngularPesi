export class Peso{

    constructor(
        private kg:number,
        private colour:string, 
        private usable:boolean,
        private id:number,
        private size?:Size,
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
    getSize():Size{
        if(this.size) return this.size;
        return Size.LARGE;
    }

    toggleUsable():boolean{
        return this.usable = !this.usable;
    }

}
export enum Size{ //% OF MAX SIZE
    X_SMALL=0.2,
    SMALL=0.25,
    MEDIUM=0.5,
    X_MEDIUM=0.7,
    XX_MEDIUM=0.8,
    LARGE=1,
    
}

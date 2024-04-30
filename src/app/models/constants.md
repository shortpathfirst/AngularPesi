```ts
     //////////////////////////////////
     ///// ALL UNDER IS BASED ON PLATES
     //////////////////////////////////
     platess= [
        { weights: 25, colour:"red", id: 1, value: false},
        { weights: 20, colour:"blue", id: 2, value: true},
        { weights: 15, colour:"yellow", id: 3, value: true},
        { weights: 10, colour:"green", id: 4, value: true},
        { weights: 5, colour:"white", id: 5, value: true},
        { weights: 2.5, colour:"black", id: 6, value: true},
        { weights: 1.25, colour:"gray", id: 7, value: true},
        { weights: 0.5, colour:"lightgray", id: 8, value: false},
     ];

     get selectedPlates() {
        return this.platess
           .filter(plate => plate.value)
  
    }
    public calc(){
        this.stackWeight = (this.total - this.barbell) / 2;
        let totalUsed = []; 
        this.idsUsed = [];


        //Beginning of calculation of weights on each side
        for (let i = 0; i < this.selectedPlates.length; i += 1){
            let count = 0
            while (this.stackWeight >= this.selectedPlates[i].weights){
                this.stackWeight -= this.selectedPlates[i].weights
                count += 1
                    if (count >= 1){
                        // pushes the selectedPlates weights onto totalUsed array
                        totalUsed.push(this.selectedPlates[i].weights); 
                        // pushes the selectedPlates IDs onto totalUsed array
                        totalUsed.push(this.selectedPlates[i].id);
                    }    
            }
        }
        //loop that gets every other element of totalUsed array starting with the first element
        // AKA just displays the ID's of the weights
        for (let i = 0; i < totalUsed.length; i += 2) {
            this.idsUsed.push(totalUsed[i + 1]);
        }
        //loop that gets every other element of totalUsed array starting with the second element
        //AKA just displays the weights without their IDs        
        console.log(this.idsUsed);
    return {totalUsed, any: this.idsUsed, remaining: this.stackWeight} 
    } 

////////////////////////
////////////////////////
////////////////////////
  loadStack2(stack:number,kg:number){ //kg -> object.next
    if(stack<=0 || kg<=0){ 
      return;
    } else if(stack>=kg && (kg==.5 || kg==1 || kg == 2.5 || kg==5)) {
      this.updateWeight(kg);
        this.loadStack2(stack - kg, kg);
    }
    else if(stack>=kg && kg>5){
      let numPesi = Math.floor(stack/kg);
      stack= stack -(numPesi*kg);
      
      while(numPesi>0){
        this.updateWeight(kg);
        numPesi--;
      }
      this.loadStack2(stack,kg-5); //Use next kg avaiable
    } else{
      this.loadStack2(stack, kg > 5 ? kg-5 : kg-.5);
    }

  }

```
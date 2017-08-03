//Class
class CarES6{
    constructor(loc){
        this.loc = loc;
    }
    move(){
        this.loc++;
    }

    static endGame(){
        console.log("Game over" + this);    //In this case 'this' is bound to the calling 'object': CarES6 and it will log the contents of CarES6
    }
}

//Usage
const amyES6 = new CarES6(1);       //We need to use the 'new' keyword in order to create a new object which will be bound to 'this' inside the class
amyES6.move();
const benES6 = new CarES6(9);
benES6.move();

CarES6.endGame();                   //Static functions can be called without creating a new object
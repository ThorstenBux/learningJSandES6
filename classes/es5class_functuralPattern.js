//Class
var Car = function(loc){
    var obj = {loc:loc};
    var move = function (){         //!!We still create a new move-function for each new Car-object
        obj.loc++;
    };
    return obj;
};

//Usage
var amyC = Car(1);
amyC.move();
var benC = Car(9);
benC.move();


//Remove the generation of a new move-function for each Car-object 
//Class:

var Car2 = function(loc){
    this.loc = loc;
};
Car2.prototype.move = function (){         //Moving the move-function to the prototype of Car2 gives us the posibility to share that function across all Car2-objects
        this.loc++;
        console.log("move");
};

//Usage
var amyC2 = new Car2(1);                   //We now need to create the Car2-object using the 'new' keyword to create a new object which is bound to 'this' in the Car2-function
amyC2.move();
var benC2 = new Car2(9);
benC2.move();
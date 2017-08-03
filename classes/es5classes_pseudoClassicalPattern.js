//Pseudoclassical pattern
//Class:

//Calling the function Car2 with the 'new' keyword will internally add the two commented-out lines of code to the function as a convenience.
var Car2 = function(loc){
    //this = Object.create(Car2.prototype);      
    this.loc = loc;
    //return this
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

//Source: https://classroom.udacity.com/courses/ud015/lessons/2794468539/concepts/27208285770923
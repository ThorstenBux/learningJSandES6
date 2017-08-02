//*** Library ***//
//Library for 2nd iteration
var move = function(car){   // equal to: 'function move(car)'
    car.loc++;
}

//Addition to library for 3rd iteration
var carlike = function(obj,loc){    //Takes an object and adds the location property to it. Then it retuns it again.
    obj.loc = loc;
    return obj;
}

//4th iteration, change carlike to decorate the object with the move function
var carlike4 = function(obj,loc){
    obj.loc = loc;
    obj.move = move4;
    return obj;
}
//4th interation move function: (In order for the above to work we need to change the move function to use the 'this' object to move the car)
var move4 = function(car){
    this.loc++;
}

//*** ENDLibrary ***//

//First iteration
var amy = {loc:1};
amy.loc++;
var ben = {loc:9};
ben.loc++;

//2nd iteration refactor the loc++ to a move function in a library
var amy2 = {loc:1};
move(amy2);
var ben2 = {loc:9};
move(ben2);

//3rd iteration refactor the loc attribute to a decorator pattern with a function called carlike
var amy3 = carlike({},1);
move(amy3);
var ben3 = carlike({},9);
move(ben3);

//4th interation, refactor move to be a object function of the car this includes changes to the library
var amy4 = carlike4({},1);
amy4.move();
var ben4 = carlike4({},9);
ben4.move();
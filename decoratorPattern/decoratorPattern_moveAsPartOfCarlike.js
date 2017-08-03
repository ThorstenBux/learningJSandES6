//In the final stage we refactor the move function to be part of the carlike decorator function:
//Libary
var carlike = function(obj,loc){
    obj.loc = loc;
    obj.move = function() {         //This leads to a NEW function beeing generated for each object. --> So we end up with one function per object in memory!
        //this.loc++;                 //We can however remove 'this' and use 'obj' instead because the move funciton lives inside a specific closure scope with access to 'obj'
        obj.loc++;                            //This prevents a new 'this' property from beeing bound everytime we call the move function.
    };
    return obj;
}

//App
var amy5 = carlike({},1);
amy5.move();
var ben5 = carlike({},9);
ben5.move();
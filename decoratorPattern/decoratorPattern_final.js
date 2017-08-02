//In the final stage we refactor the move function to be part of the carlike decorator function:
//Libary
var carlike = function(obj,loc){
    obj.loc = loc;
    obj.move = function() {
        this.loc++;
    };
    return obj;
}

//App
var amy5 = carlike({},1);
amy5.move();
var ben5 = carlike({},9);
ben5.move();
var CarS = function(loc){
    this.loc = loc;
};
CarS.prototype.move = function(){
    this.loc++;
}

var Van = function(loc){
    CarS.call(this,loc);            //This calls the CarS-function with the context of Van. As the 'new' keyword provides us with a new instance of 'this' in the Van context.
}
Van.prototype.grab = function(){
    console.log("grab");
}
Van.prototype = Object.create(CarS.prototype);
Van.prototype.constructor = Van;

var zed = new CarS(1);
zed.move();
var amyS = new Van(5);
amyS.move();
amyS.grab();
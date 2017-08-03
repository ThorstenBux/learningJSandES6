//Class
var CarP = function(loc){
    var obj = Object.create(Car2.prototype);
    obj.loc = loc;
    return obj;
};
// CarP.methods = {                    //JavaScript comes with a convenience function to do this called 'prototype'
//     move : function () {
//         this.loc++;
//     }
// };

CarP.prototype.move =  function () {
        this.loc++;
    }

//Usage
var amyP = Car2(1);
amyP.move();
var benP = Car2(9);
benP.move();
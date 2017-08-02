var fn = function (one,two) {
    console.log(this,one,two)
};

var r = {}, g = {}, b={} , y={};

r.method = fn;

r.method(g,b);              //log(Object r{}, Object g{} , Object b{})
//--> equal to:
r['method'](g,b);

fn(g,b);                    //log(<global>, Object g{} , Object b{})    --> in strickt mode and ES6 this === undefined
//If you want to bind a specific value to this use the following:
fn.call(r,g,b);             //log(Object r{}, Object g{} , Object b{})
//Tricky: the call function overrides the default binding to this by the passed in value for this which is the first parameter of call()
r.method.call(y,g,b);       //log(Object y{}, Object g{} , Object b{})

setTimeout(fn,1000);        //log(<global>, undefined, undefined)   --> in strickt mode and ES6 this === undefined
setTimeout(r.method,1000);  //log(<global>, undefined, undefined)   --> in strickt mode and ES6 this === undefined
setTimeout(function(){
    r.method(g,b);          //log(Object r{}, Object g{}, Object b{})
},1000);


//Arrow functions
//With regular functions, the value of this is set based on how the function is called. 
//With arrow functions, the value of this is based on the function's surrounding context. 
//In other words, the value of this inside an arrow function is the same as the value of this outside the function.

var fnArrow = (one,two) => console.log(this,one,two);

fnArrow(g,b);               //log(<global>, undefined, undefined)   --> in strickt mode and ES6 this === undefined
r.method = fnArrow(g,b);    //log(<global>, undefined, undefined)   --> in strickt mode and ES6 this === undefined

// constructor
function IceCream() {
  this.scoops = 0;
}

// adds scoop to ice cream
IceCream.prototype.addScoop = function() {
  setTimeout(() => { // an arrow function is passed to setTimeout
    this.scoops++;
    console.log('scoop added!');
  }, 0.5);
};

const dessert = new IceCream();
dessert.addScoop();
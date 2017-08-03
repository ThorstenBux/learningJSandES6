const gold = {a:1};
console.log(gold.a);        //log: 1
console.log(gold.z);        //log: undefined

const blue = jQuery.extend({},gold);
blue.b = 2;
console.log(blue.a);        //log: 1
console.log(blue.b);        //log: 2
console.log(blue.z);        //log: undefined

const rose = Object.create(gold);       //Creates a lookup chain to fall through to the gold object for properties not available in rose-object
rose.b = 2;
console.log(rose.a);        //log: 1    
console.log(rose.b);        //log: 2
console.log(rose.z);        //log: undefined

gold.z = 3;
console.log(blue.z);        //log: undefined
console.log(rose.z);        //log: 3 --> because of the lookup-chain that happens at Object.create rose will look for the z property in the gold object


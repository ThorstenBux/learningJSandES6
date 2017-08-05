//Simple pass through proxy

var richard = {status: 'looking for work'};
var agent = new Proxy(richard, {});         //1. parameter = object we are proxying, 2. parameter handler object

agent.status; // returns 'looking for work'



//Get Trap: Will take over whenever a property of the proxied object is accessed for read

const richard2 = {status: 'looking for work'};
const handler = {
    get(target, propName) {     //get is always called when a handler is invoked by an agent. 'target' is the object we are proxying; propName is the property we request from 'target'
        console.log(target); // the `richard` object, not `handler` and not `agent`
        console.log(propName); // the name of the property the proxy (`agent` in this case) is checking
        console.log(target[propName]);  //log: 'looking for work' as this will look up the property on the target object
    }
};
const agent2 = new Proxy(richard2, handler);
agent2.status;


//Set Trap: Will take over whenever a property of the proxied object is accessed for write

const richard3 = {status: 'looking for work'};
const handler2 = {
    set(target, propName, value) {
        if (propName === 'payRate') { // we check if the property the agent tries to write is called 'payRate'. if that is true, take 15% as commission
            value = value * 0.85;
        }
        target[propName] = value;   //Write the actuall property and valye to the target object. Note this creates a new property on the target as the target previousely only had the 'status' property.
    }
};
const agent3 = new Proxy(richard3, handler2);
agent3.payRate = 1000; // set the actor's pay to $1,000
agent3.payRate; // $850 the actor's actual pay

/*
So we've looked at the get and set traps (which are probably the ones you'll use most often), but there are actually a total of 13 different traps that can be used in a handler!

the get trap - lets the proxy handle calls to property access
the set trap - lets the proxy handle setting the property to a new value
the apply trap - lets the proxy handle being invoked (the object being proxied is a function)
the has trap - lets the proxy handle the using in operator
the deleteProperty trap - lets the proxy handle if a property is deleted
the ownKeys trap - lets the proxy handle when all keys are requested
the construct trap - lets the proxy handle when the proxy is used with the new keyword as a constructor
the defineProperty trap - lets the proxy handle when defineProperty is used to create a new property on the object
the getOwnPropertyDescriptor trap - lets the proxy handle getting the property's descriptors
the preventExtenions trap - lets the proxy handle calls to Object.preventExtensions() on the proxy object
the isExtensible trap - lets the proxy handle calls to Object.isExtensible on the proxy object
the getPrototypeOf trap - lets the proxy handle calls to Object.getPrototypeOf on the proxy object
the setPrototypeOf trap - lets the proxy handle calls to Object.setPrototypeOf on the proxy object
*/


//Example old ES5 getter:
var obj = {
    _age: 5,
    _height: 4,
    get age() {
        console.log(`getting the "age" property`);
        console.log(this._age);
        return this._age;
    },
    get height() {
        console.log(`getting the "height" property`);
        console.log(this._height);
        return this._height;
    }
};

obj.age; // logs 'getting the "age" property' & 5
obj.height; // logs 'getting the "height" property' & 4
obj.weight = 120; // set a new property on the object
obj.weight; // logs just 120

//With new proxies
const proxyObj = new Proxy({age: 5, height: 4}, {
    get(targetObj, property) {
        console.log(`getting the ${property} property`);
        console.log(targetObj[property]);
    }
});

proxyObj.age; // logs 'getting the age property' & 5
proxyObj.height; // logs 'getting the height property' & 4
proxyObj.weight = 120; // set a new property on the object
proxyObj.weight; // logs 'getting the weight property' & 120
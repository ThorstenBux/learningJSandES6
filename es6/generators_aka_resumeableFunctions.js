//Regular functions run from start to end without any way to stop them at a specific location and pick up from that location later on e.g.
function getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        console.log(name);
    }

    console.log('the function has ended');
}

getEmployee();


//Generators:
function* getEmployee() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        console.log( name );
    }

    console.log('the function has ended');
}
//When a generator gets invoced it generates and returns an iterator object
getEmployee();      //output: getEmployee {[[GeneratorStatus]]: "suspended"}

const generatorIterator = getEmployee();
generatorIterator.next();
/**output 
the function has started
Amanda
Diego
Farrin
James
Kagure
Kavita
Orit
Richard
the function has ended
 */

//Making the function actually stop:
function* getEmployee_yield() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        console.log( name );
        yield;                  //The yield keyword makes the function stop and resumable at this point.
    }

    console.log('the function has ended');
}

const generatorIteratorYield = getEmployee_yield();
generatorIteratorYield.next();
/* output:
the function has started
Amanda
*/
generatorIteratorYield.next();
//Diego



//NOW lets make it COOL and let the yield return a value
function* getEmployee_yield_return() {
    console.log('the function has started');

    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];

    for (const name of names) {
        yield name;                  //The yield keyword makes the function stop and resumable at this point. The parameter on the right is return to the caller
    }

    console.log('the function has ended');
}

const generatorIteratorYieldReturn = getEmployee_yield_return();
console.log(generatorIteratorYieldReturn.next().value);         //'.value' gives us access to the value to the right of the yield keyword.
/* output: 
the function has started
Amanda
--> the first call of 'next()' will run the function from start to the yield keyword */
console.log(generatorIteratorYieldReturn.next().value);
//log: Diego --> each call of next() will then pickup from the yield keyword and proceed from there.


//Question: How often to we need to call 'next()' on this function till it is completed?

function* udacity() {
    yield 'Richard';
    yield 'James'
}

//3 times!


//AND NOW the best we can send data back in:
function* displayResponse() {
    const response = yield;
    console.log(`Your response is "${response}"!`);
}

const iterator = displayResponse();

iterator.next(); // starts running the generator function
iterator.next('Hello Udacity Student'); // send data into the generator
// the lines above logs to the console: Your response is "Hello Udacity Student"!
// --> yield will stop exactly at the position of the yield keyword and pick up from there when 'next()' is called the next time.
// iterator.next() runs till the yield keyword, but does not complete the parameter assignment
// iterator.next('Hello Udacity Student') will pickup from the yield keyword and complete the parameter assignment using the string we passed to the next()-function
// console.log is called.


//Example that does both:
function* getEmployee_In_Out() {
    const names = ['Amanda', 'Diego', 'Farrin', 'James', 'Kagure', 'Kavita', 'Orit', 'Richard'];
    const facts = [];

    for (const name of names) {
        // yield *out* each name AND store the returned data into the facts array
        facts.push(yield name); 
    }

    return facts;
}

const generatorIteratorInOut = getEmployee_In_Out();

// get the first name out of the generator
let nameOfStudent = generatorIteratorInOut.next().value;

// pass data in *and* get the next name
nameOfStudent = generatorIteratorInOut.next(`${nameOfStudent} is cool!`).value; 

// pass data in *and* get the next name
nameOfStudent = generatorIteratorInOut.next(`${nameOfStudent} is awesome!`).value; 

// pass data in *and* get the next name
nameOfStudent = generatorIteratorInOut.next(`${nameOfStudent} is stupendous!`).value; 

// you get the idea
nameOfStudent = generatorIteratorInOut.next(`${nameOfStudent} is rad!`).value; 
nameOfStudent = generatorIteratorInOut.next(`${nameOfStudent} is impressive!`).value;
nameOfStudent = generatorIteratorInOut.next(`${nameOfStudent} is stunning!`).value;
nameOfStudent = generatorIteratorInOut.next(`${nameOfStudent} is awe-inspiring!`).value;

// pass the last data in, generator ends and returns the array
const positions = generatorIteratorInOut.next(`${nameOfStudent} is magnificent!`).value; 

// displays each name with description on its own line
positions.join('\n');
for(const fact of positions){
    console.log(fact);
}
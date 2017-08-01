/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

//ES6 syntax
emotions("happy",laugh => {
    let laughts = "";
    while(laugh > 0){
        laughts +="ha";
        laugh--;
    }
    return laughts + "!";
}
);

//ES5 syntax
emotions("happy",function (laugh) {
    let laughts = "";
    while(laugh > 0){
        laughts +="ha";
        laugh--;
    }
    return laughts + "!";
}
);

// your code goes here
// call the emotions function here and pass in an
// inline function expression

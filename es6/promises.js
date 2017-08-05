//A new promis is created with new Promise. We pass the code that will be run asynchronously as first parameter
//The function gets passed to the function we provide the Promise constructor - typically the word "resolve" is used to indicate that this function should be called when the request completes successfully. 
new Promise(
    //This function will be run asynchronously
    function (/*function to call on success*/ resolve, /*function to call on error*/ reject) { 
        setTimeout(function createSundae(flavor = 'chocolate') {
        const sundae = {};
        // request ice cream
        // get cone
        // warm up ice cream scoop
        // scoop generous portion into cone!
        if ( false/* iceCreamConeIsEmpty(flavor) */ ) {
            reject(`Sorry, we're out of that flavor :-(`);
        }
        resolve(sundae);
        }, Math.random() * 2000);
    }
    //End of the promise function
);

//Using a Promise
console.log("Let us create a Sundae");
// Promises return immediately 
const mySundae = new Promise(function (resolve, reject) {
    setTimeout(function createSundae(flavor = 'chocolate') {
        const sundae = {};
        // request ice cream
        // get cone
        // warm up ice cream scoop
        // scoop generous portion into cone!
        if ( false/* iceCreamConeIsEmpty(flavor) */ ) {
            reject(`Sorry, we're out of that flavor :-(`);
        }
        resolve(sundae);
        }, Math.random() * 2000);
});
console.log("Immediate return");

//The promise object (in this case mySundae) has a .then() method that will be called when the promise returns (either successfull -> resolve, or error -> reject)
//.then() takes two functions as parameters:
// 1. the function to run if the request completed successfully
// 2. the function to run if the request failed to complete

mySundae.then( sundae => {     //New ES6 syntax
        console.log(`Time to eat my delicious ${sundae}`);
}, function(errorMessage) {     //Classic syntax
    console.log(errorMessage);
});
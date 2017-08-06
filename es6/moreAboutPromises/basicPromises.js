//Promises have 4 stages:
//
// Fullfilled (Resolved) --> Everything worked out well
// Rejected --> It didn't work
// Pending --> Still waiting 
// Settled --> Something happened!!!

const promise = new Promise(function(resolve,reject) {
    const error=false, resolveParam = "success" , rejectParam = "error";
    console.log('first');
    resolve(resolveParam);
    console.log('second');
    if(error)
        reject(rejectParam);
}).then(function() {
  console.log('third');
}); //You can also link the then function without using a promise-variable directly.

//You'll notice that 'first', 'second' and 'third' all get logged. 
//Most notably, 'second' gets logged despite the fact that it comes after resolve().

//Handle the promise result using the promise-Object (the function name is obsolete!) and you could also use arrow functions 'resolveParam => {}'
promise.then(function success(resolveParam){

}, function error(rejectParam){

});

//Handle the promise result using a then and a catch function
promise.then(function success(resolveParam){

});
promise.catch(function error(rejectParam){

});
// --> that is the same as the then() function with two functions as parameters
//IMPORTANT:
  // There is a slight difference between .then(successFunc,errorFunc) and .then(successFunc).catch(errorFunc):
      //In case there is an error inside the successFunc it will be catched in the .catch(errorFunc) it will not be catched in the 
      //errorFunc passed as 2nd parameter to the .then() function.
      //This means then().catch() can both be called where as .then(successFunc,errorFunc) only one of them gets called
// --> That is why it might be better to use .then().catch(). I personally like .then(successFunc,errorFunc) better because when chaining promisses
// it is easier to spot when the 2nd promises .then() is called

promise.then(success => {
  console.log("success");
  //  throw new Exception();  //Attention: In this case, if there is an error in the 1st Promise success function the 2nd-Promise error function is called. (See (*1) for details)
  return new Promise( () => console.log("2nd Promise"));
}, error => {
  console.log("error");
}).then(success2nd => {       //Here we work with the 2nd Promise returned by the first promise's success function. 
                              //You have the closing ')' to indicate when the .then function of the first promise is done. The chain looks like this: then().then()
  console.log("success 2nd");
},error2nd => { 
  console.log("error 2nd");
});

//Using catch that would look like this:

promise.then(success => {
  console.log("success");
  //  throw new Exception();  //Attention: In this case, if there is an error in the 1st Promise success function the .catch() function is called. (See (*1) for details)
  return new Promise( () => console.log("2nd Promise"));
}).catch( error => {
  console.log("error");
}).then(success2nd => {       //Here we work with the 2nd Promise returned by the first promise's success function. 
                              //You cannot explicitely see when we work with the 2nd promise because then().catch().then().catch() are just joined one after the other.
  console.log("success 2nd");
}).catch (error2nd => { 
  console.log("error 2nd");
});

//(*1) Attention: As soon as a promise *rejects* the JS-Engine skipps to the next .reject-function in the chain which can be a .catch() or a .then(undefined,rejectFunc) 
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
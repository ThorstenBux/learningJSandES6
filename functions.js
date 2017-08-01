//(1) using named functions 
//(2) passing the named function directly as parameter

// function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

//(1) named function
const favoriteMovie = function displayFavorite(movieName){
    console.log("My favorite movie is " + movieName);
}

//(1) call movies using the named function:
movies(favoriteMovie,name);



//(2) call the movies function, pass in the named-function and name of movie
movies(function displayFavorite2(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");


// call the movies function, pass in the anonymous-function and name of movie
movies(function (movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");

// call the movies function, pass in the function and name of movie ES6 syntax
movies(movieName => console.log("My favorite movie is " + movieName), "Finding Nemo");
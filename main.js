let X = 5;
X *= 7; //X=X * 7, 5*7 , output: 35
console.log(X); //Creating variables and manipulating values

let myName = ('Arisa');
const myCity = ('Tempe');
const myAge = 23;
console.log(`My name is ${myName}. I live in ${myCity}. My age is ${myAge}.`); //Interpolate multiple variables into a string

console.log('My name is ' + myName +' and I live in '+ myCity +'. I am currently '+ myAge +'.'); //Concatenating strings using variables of different data types

var hiWorld = ('Hi World');
hiWorld = (1);
console.log(hiWorld);

let heyWorld = ('Hey World');
heyWorld = 2;
console.log(heyWorld);

const helloWorld = ('Hello World');
helloWorld = 3; //TypeError 

const helloWorld; //SyntaxError

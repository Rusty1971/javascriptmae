// To count number of chars in a string
console.log("Hello".length);
// Returns a value of '5' number of letters in "Hello"

// To make a string upper case
console.log("hello".toUpperCase());
// changes "hello" to "HELLO"

// To make a string lower case
console.log("HELLO".toLowerCase());
// changes "HELLO" to "hello"

// (Math.random()) 
console.log(Math.random());
// this creates a random number between 0 & 1 with decimals (e.g 0.1234 etc)

// (Math.random()*10) 
console.log(Math.random()*10);
// this creates a random number between 0 & 10 with decimals (e.g 0.1234 or 10.1234 etc)

// (Math.floor(Math.random()*10))
console.log(Math.floor(Math.random()*10));
// this creates a random whole number between 0 & 10

// .toUpperCase().charAt(7))
console.log("All Around the world".toUpperCase().charAt(7));
// This converts string to upper case and returns the 8th letter "U"

// Creating a variable that's changable (let is the same as var but new standard)
let mark = "Mark"
console.log (mark);
var mark = "Mark"
// this has called a variable called mark with a value of Mark

// Creating a variable that's not changable
const mark = "Mark"
console.log (mark);
// this has called a variable called mark with a value of Mark

// Using a variable in a string
let favouriteDrink = "coffee";
console.log(`My favourite drink is ${favouriteDrink}`);
// set variable, the use ` and ${} with the variable inside

// Basic conditional format
if (condition1) {
    //do this
}
else if (condition2) {
    //do this
}
else {
    //if nothing else matched do this
}
// So it would look like this (Example below):
let place = "Manc";
let weather = "Cloudy";
if (place == "Manc" && weather == "Sunny") {
 console.log("Check again");
}
else if (place == "Manc" && weather == "Rain") {
 console.log("Obvs");
}
else {
 console.log("What it isn’t raining?");
}

// True or false conditional logic
let day = "Friday";
if (day == "Saturday" || day == "Sunday"){
    console.log("It's weekend!");
}
else {
    console.log("When's weekend?");
}

// Arrow Function Syntax (this is how we should be writting functions)
const square = (number) => {
    return number * number;
   };
   square(5);
// So the square function would hold a value of 25 (5*5), it wouldn't disply.
//
// Declaration Function (would give same outcome as above, uses function instead of const)
function square(number) {
    return number * number;
   };
   square(5);
//
// Expression Function (would give same outcome as the two above, uses const but no =>)
const square = function(number) {
    return number * number;
   };
   square(5); 

// Simple Array (Placing list in [] square brackets creates the array)
let coffeeOrder = [
    "Alex - Cortado",
    "Ben - Cortado",
    "Charlie - Whatever's new"
   ];
   console.log(coffeeOrder);
   // result would see three coffee orders returned.
   console.log(coffeeOrder[2]);
   // result would see just Charlie's coffee order returned.
   coffeeOrder[1] = "Ann - Vanilla latte";
   // result would see Ben's order replaced in the list with Ann's
   console.log(coffeeOrder.length);
   // result would let me know how many items are on the list
   coffeeOrder.push("Donna - espresso");
   // result would see Donna's order added to bottom of order.
   coffeeOrder.pop();
   // result would see Donna's order bottom of the list removed

// Loops (for & while loops)
// for loops
for (statment1; statment2; statement3){
    //do stuff
   }
while (condition){
    //do stuff
   }
// for loop example 1
let favouriteChoco = [
    "Mars",
    "Snickers",
    "Dairy Milk",
    "Picnic"
   ];
   for (chocoIndex = 0; chocoIndex < favouriteChoco.length;
   chocoIndex++) {
    console.log(favouriteChoco[chocoIndex]);
   }
// Result list everything because  the index is at 0, and <variable.length takes us
// to the end of the list with the index++ adding 1 to the count. if the index started
// at 1 then Mars would be missing from the list and so on.
//
for( i = 0 ; i < 10 ; i++ ){
    console.log(i);
   } 
for (i = 9; i > -1; i-- ){
    console.log(i);
   }
// Result 4 the first for will be a list 0-9, and the second will be 9-0.
//
// for loop example 2
let favFilms = [
    "Wrong turn",
    "Carrie",
    "Ghostbusters",
    "Scream"
];
for (filmIndex = 0; filmIndex < favFilms.length; filmIndex++) {
    console.log(favFilms[filmIndex]);
}
const filmCheck = () => {
    if (favFilms[2] == "Ghostbusters") {
        console.log("Yay, the third film is Ghostbusters.")
    }
    else {
        console.log("The third film is not Ghostbusters.")
    }
}
filmCheck()
// Result checks array to see if index2 [2] ia equal to Ghostbusters and shows in log
//
// while loop example 1
let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = " ";

while(currentCard != "Spade"){
 console.log(currentCard);
 currentCard = cards[Math.floor(Math.random()*4)];
}
console.log(currentCard);
// Result will list suits random until Spade is found, if Heart was added to let currentCard
// instead of a space it would list Heart first then random until it reaches Spade.
//
// while example 2
let number = 50;
let currentNum = 0;
while(currentNum !== number){
  currentNum = Math.floor((Math.random() * 50) + 1);
  console.log(currentNum);
}
// result is it list random numbers until 50 is returned.
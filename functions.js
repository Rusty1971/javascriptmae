// if (1 === "1") {
   // console.log (true);
// }
// else {
    // console.log (false);
// }
// if (1 !== "1") {
   // console.log (true);
// }
// else {
   // console.log (false);
// }
// let Age = 48
// if (Age > 17) {
//     console.log ("Yes I can serve you");
// }
// else {
//     console.log ("You aren’t old enough");
// }
// let Age = 48
// let Country = "UK"
// if (Age > 17 && Country == "UK") {
//     console.log ("UK and over 17 years old");
// }
// else {
//     console.log ("You aren’t old enough");
// }

// Challenge 1
// let password = "qwertyu";
// console.log(password + ' ' + password.length);
// if (password.length <= 7) {
//     console.log ("Password to short.")
// }
// else {
//     console.log ("Password ok.")
// }

// Challenge 2
// let num  =14;
// if (num % 3 == 0 || num % 5 == 0 ) {
//  console.log ("divisible by 3 or 5");
// } else {
//     console.log ("not divisible by 3 or 5");
// }

// Challenge 3
// let num  =14;
// if (num % 3 == 0 && num % 5 == 0 ){
//     console.log("Fizz Buzz")
// }
// else if (num % 3 == 0) {
//  console.log ("Fizz");
// }
// else if (num % 5 == 0) {
//     console.log("Buzz");
//    }
//    else {
//     console.log(`Number variable is ${num}`);
//    }

// Challenge 4
// let time ="07:00";
// let placeOfWork ="Code Nation";
// let townOfHome ="Chester";
// if (time == "07:00") {
//     console.log(`I'm at home in ${townOfHome}`)
// }
// else if (time == "08:00"){
//  console.log (`I am travelling from ${townOfHome} to work`)
// }
// else if (time == "09:00"){
//     console.log(`I am at my place of work ${placeOfWork}`);
//    }
//    else {
//     console.log("Not a valid time variable set");
//    }

// Challenge 5
// let word ="Liverpool";
// var res = word.toUpperCase(word)
// var output = res.slice(-1)+res[0];
// if (output.charAt(0) == output.charAt(1)) {
// console.log("True")
// }
// else {
//     console.log("False");
//  }

// Challenge 6
// let num1 =21;
// let num2 =10;
// var sum = num1 + num2;
// if (sum%2 == 0) {
//     console.log(`${sum}`)
// }
// else {
// var sum = num1 * num2;
//   console.log(`${sum}`)
// }

// Cinema Challange
// let Age =60;
// if (Age <=17) {
//     console.log("Ticket Price £8.00");
// }
// else if (Age <=18 || Age <=59) {
//     console.log("Ticket Price £10.95");
// }
// else if (Age >=60) {
//     console.log("Ticket Price £7.50");
// }

// Activity1 - Pizza Order
// let orderCount = 0;

// const takeOrder = (topping) => {
//     console.log(`Pizza with ${topping}`);
//     orderCount++;
//     console.log(orderCount);
// }
// takeOrder ("pineapple");
// takeOrder ("pineapple & ham");
// takeOrder ("pineapple, ham & cheese");

// Activity2 - Cash Machine
// let actualPin = 1234;
// let accBal = 500;
// const cashMachine = (inputPin, amount) => {
//     if (inputPin == actualPin && amount <= accBal) {
//         console.log(`Take your cash of £${amount}.`)
//     }
//     else if (inputPin == actualPin && amount > accBal) {
//         console.log("Insufficient funds.")
//     }
//     else {
//         console.log("Incorrect PIN.")
//     }
// }
// cashMachine(1234, 499)
// cashMachine(1233, 500)
// cashMachine(1234, 50000)

// Activity3 - Function subtract
// const takeAway = (num1, num2) => {
//     return num1 - num2;
//    }
//    takeAway(100,50);
//    console.log(takeAway(100,50));
//
// *Liams code*
// const subtract = (numb1, numb2)=>{
//     console.log(numb1 - numb2);
// }
// subtract(545, 72);

// Activity4 - Function Divide
// const takeDiv = (num1, num2) => {
//     return num1 / num2;
//    }
//    takeDiv(100,10);
//    console.log(takeDiv(100,10));
//
// *Liams code*
// const divideTwoNums = (num1, num2)=>{
//     console.log(num1 / num2);
  
// }
// divideTwoNums(100, 4);

//Activity5 - Celsius to Fahrenhiet Conversion
// const multiplyBynineFifths = (celsius) => {
//     return celsius * (9/5);
// };
// const getFahrenheit = (celsius) => {
//     return multiplyBynineFifths (celsius) + 40;
// };
// console.log("The temperature is " + getFahrenheit(10) + "F");


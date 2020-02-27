// 3 Favorite Songs

// let favSong = [
//     "Number 1 - Sultans of Swing",
//     "Number 2 - Tunnel of Love",
//     "Number 3 - Something Like This"
// ];
// favSong.splice ();
// console.log(favSong);

// Activity1 - 3 Favorite Websites
// let favWeb = [
//     "www.bbc.co.uk/sport",
//     "www.dailymail.co.uk",
//     "www.sky.com"
// ];
// console.log(favWeb);

// Activity1 - 3 Favorite Websites adding 2 extra
// let favWeb = [
//     "www.bbc.co.uk/sport",
//     "www.dailymail.co.uk",
//     "www.sky.com"
// ];
// favWeb.push ("www.skysports.co.uk", "www.bbc.co.uk/weather")
// console.log(favWeb);

// Activity1 - 3 Favorite Websites adding 2 extra, then removing 1
// let favWeb = [
//     "www.bbc.co.uk/sport",
//     "www.dailymail.co.uk",
//     "www.sky.com"
// ];
// favWeb.push ("www.skysports.co.uk", "www.bbc.co.uk/weather")
// favWeb.pop()
// console.log(favWeb);

// Activity2 - 5 Favorite Websites using shift comand
// let favWeb = [
//     "www.bbc.co.uk/sport",
//     "www.dailymail.co.uk",
//     "www.sky.com",
//     "www.skysports.co.uk",
//     "www.bbc.co.uk/weather"
// ];
// favWeb.shift()
// console.log(favWeb);

// Activity2 - 5 Favorite Websites using unshift comand
// let favWeb = [
//     "www.bbc.co.uk/sport",
//     "www.dailymail.co.uk",
//     "www.sky.com",
//     "www.skysports.co.uk",
//     "www.bbc.co.uk/weather"
// ];
// favWeb.unshift("www.facebook.co.uk")
// console.log(favWeb);

// Activity2 - 5 Favorite Websites using slice comand
// let favWeb = [
//     "www.bbc.co.uk/sport",
//     "www.dailymail.co.uk",
//     "www.sky.com",
//     "www.skysports.co.uk",
//     "www.bbc.co.uk/weather",
//     "www.facebook.co.uk"
// ];
// console.log(favWeb.slice(2));

// Activity2 - 5 Favorite Websites using splice comand
// let favWeb = [
//     "www.bbc.co.uk/sport",
//     "www.dailymail.co.uk",
//     "www.sky.com",
//     "www.skysports.co.uk",
//     "www.bbc.co.uk/weather",
//     "www.facebook.co.uk"
// ];
// console.log(favWeb.splice(2, 2));

// Loops - 5 Favourite Films (for loop)

// let favFilm = [
//     "Leathal Wepon",
//     "Leathal Wepon 2",
//     "Leathal Wepon 3",
//     "Leathal Wepon 4",
//     "Die Hard"
// ];
// favFilm.push ("Lock Stock", "Snatch");
// for (filmInd = 0; filmInd < favFilm.length;
//     filmInd++) {
//         console.log (favFilm [filmInd]);
//     }

// Simple Loop Condition Add
// for ( i = 0; i <10; i++) {
//     console.log(i)
// }

// Simple Loop Condition Minus
// for ( i = 9; i >=0; i--) {
//     console.log(i)
// }

// While Loop
// let cards = ["Diamond", "Spade", "Heart", "Club"];
// let currentCard = " ";
// while (currentCard != "Club"){
//     console.log (currentCard);
//     currentCard = cards[Math.floor(Math.random()*4)];
// }
// console.log(currentCard);

// Activity 1 - Loops - Add a film checker function to your fav films array and for loop.
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

// Activity 2 - While Loop (random numbers until it get's to 50)
// let number = 50;
// let currentNum = 0;
// while(currentNum !== number){
//   currentNum = Math.floor((Math.random() * 50) + 1);
//   console.log(currentNum);
// }


//Cached DOM Nodes
const keyUpsClass = document.querySelector(".keyUps");
const createCounterP = document.createElement("p");
createCounterP.setAttribute("class", "count");
//Functions
let total = 0;
window.addEventListener("keyup", (e) => {
if (e.key === "s") {
total++;
if (total >= 5) {
console.log("player-S Wins!");
}
createCounterP.innerHTML = total + " presses";
keyUpsClass.appendChild(createCounterP);
} else if (e.key === "k") {
total--;
if (total <= -5) {
console.log("player-K Wins!");
}
createCounterP.innerHTML = total + " presses";
keyUpsClass.appendChild(createCounterP);
}
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Cached DOM Nodes
const keyUpsClass = document.querySelector(".keyUps");
const createCounterP = document.createElement("p");
createCounterP.setAttribute("class", "count");
//Universal Variables
let total = 0;
//Functions
const counter = (e) => {
if (e.key === "s") {
total++;
createCounterP.innerHTML = total + " presses";
keyUpsClass.appendChild(createCounterP);
} else if (e.key === "k") {
total--;
createCounterP.innerHTML = total + " presses";
keyUpsClass.appendChild(createCounterP);
}
if (total >= 5) {
console.log("player-S Wins!");
} else if (total <= -5) {
console.log("player-K Wins!");
}
};
//Event Listeners
window.addEventListener("keyup", counter);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Cached DOM Nodes
const keyUpsClass = document.querySelector(".keyUps");
const createCounterP = document.createElement("p");
createCounterP.setAttribute("class", "count");
//Universal Variables
let total = 0;
//Functions
const counter = (e) => {
if (e.key === "s") {
total++;
createCounterP.innerHTML = total + " presses";
keyUpsClass.appendChild(createCounterP);
} else if (e.key === "k") {
total--;
createCounterP.innerHTML = total + " presses";
keyUpsClass.appendChild(createCounterP);
}
if (total >= 5) {
console.log("player-S Wins!");
window.removeEventListener("keyup", counter);
} else if (total <= -5) {
console.log("player-K Wins!");
window.removeEventListener("keyup", counter);
}
};
//Event Listeners
window.addEventListener("keyup", counter);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Cached DOM Nodes
const appendCounterDivClass = document.querySelector(".appendCounterDivClass"); //This class appends the el_counterP paragraph to the page
const el_counterP = document.createElement("p"); //This variable creates a paragraph to hold the values of the total given by the counter function
el_counterP.setAttribute("class", "count"); // Gives the el_counterP paragraph a class of count
//Universal Variables
let total = 0;//holds the current total assigned by the if statement in the counter function
//Functions
const counter = (e) => { // This function counts the total opposing inputs from the windows event listener
if (e.key === "s") { // Runs if statement only when the s key is released
total--; //subtracts 1 everytime the "s" key is pressed
el_counterP.innerHTML = total + " presses"; // Gives the el_counterP paragraph text of the current total value + a string value of "pressed"
appendCounterDivClass.appendChild(el_counterP); //puts/appends the el_counterP paragraph wherever the class of appendCounterDivClass is on the page (also find in html)
} else if (e.key === "k") { // Runs if statement only when the k key is released
total++; //adds 1 everytime the "k" key is pressed
el_counterP.innerHTML = total + " presses"; // Gives the el_counterP paragraph text of the current total value + a string value of "pressed"
appendCounterDivClass.appendChild(el_counterP); //puts/appends the el_counterP paragraph wherever the class of appendCounterDivClass is on the page (also find in html)
}
if (total >= 5) { // Player k's win conditon is achieved when the total is greater than or equal to 5
console.log("player-K Wins!"); //runs a log when player k wins
window.removeEventListener("keyup", counter); // kills the window event listener
} else if (total <= -5) { // Player s's win conditon is achieved when the total is greater than or equal to 5
console.log("player-S Wins!"); //runs a log when player s wins
window.removeEventListener("keyup", counter); // kills the windo event listener
}
};
//Event Listeners
window.addEventListener("keyup", counter); // listens for the release of any key pressed while on the window variable (document queryselector whole page)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Cached DOM Nodes
const appendCounterDivClass = document.querySelector(".appendCounterDivClass"); //This class appends the el_counterP paragraph to the page
const el_counterP = document.createElement("p"); //This variable creates a paragraph to hold the values of the total returned by the keyUpEvent function
el_counterP.setAttribute("class", "count"); // Gives the el_counterP paragraph a class of count
//Global Variables
let total = 0; //holds the current total assigned by the if statement in the keyUpEvent function
//Functions
const keyUpEvent = (e) => {
// This function passes the keyup events from the windows event listener
if (e.key === "s") {
// Runs if statement only when the s key is released
total--; //subtracts 1 everytime the "s" key is pressed
el_counterP.innerHTML = total + " presses"; // Gives the el_counterP paragraph text of the current total value + a string value of "pressed"
appendCounterDivClass.appendChild(el_counterP); //puts/appends the el_counterP paragraph wherever the class of appendCounterDivClass is on the page (also find in html)
} else if (e.key === "k") {
// Runs if statement only when the k key is released
total++; //adds 1 everytime the "k" key is pressed
el_counterP.innerHTML = total + " presses"; // Gives the el_counterP paragraph text of the current total value + a string value of "pressed"
appendCounterDivClass.appendChild(el_counterP); //puts/appends the el_counterP paragraph wherever the class of appendCounterDivClass is on the page (also find in html)
}
if (total >= 5) {
// Player k's win conditon is achieved when the total is greater than or equal to 5
console.log("player-K Wins!"); //runs a log when player k wins
window.removeEventListener("keyup", keyUpEvent); // kills the window event listener
} else if (total <= -5) {
// Player s's win conditon is achieved when the total is greater than or equal to 5
console.log("player-S Wins!"); //runs a log when player s wins
window.removeEventListener("keyup", keyUpEvent); // kills the windo event listener
}
};
//Event Listeners
window.addEventListener("keyup", keyUpEvent); // listens for the release of any key pressed while on the window variable (document queryselector whole page)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Cached DOM Nodes
const appendCounterDivClass = document.querySelector(".appendCounterDivClass"); //This class appends the el_counterP paragraph to the page
const el_counterP = document.createElement("p"); //This variable creates a paragraph to hold the values of the total returned by the keyUpEvent function
el_counterP.setAttribute("class", "count"); // Gives the el_counterP paragraph a class of count
el_counterP.style.marginLeft = "50%"; // Centers the el_counterP paragraph on the page
//Global Variables
let total = 0; //holds the current total assigned by the if statement in the keyUpEvent function
//Functions
const keyUpEvent = (e) => {
// This function passes the keyup events from the windows event listener
if (e.key === "s") {
// Runs if statement only when the s key is released
total--; //subtracts 1 everytime the "s" key is pressed
el_counterP.style.transform = `translateX(${total * 20}%)`; // moves the el_counterP paragraph along the X-axis by 20% of the total
el_counterP.innerHTML = total + " presses"; // Gives the el_counterP paragraph text of the current total value + a string value of "pressed"
appendCounterDivClass.appendChild(el_counterP); //puts/appends the el_counterP paragraph wherever the class of appendCounterDivClass is on the page (also find in html)
if (total <= -5) {
// Player s's win conditon is achieved when the total is greater than or equal to 5
console.log("player-S Wins!"); //runs a log when player s wins
window.removeEventListener("keyup", keyUpEvent); // kills the window event listener
}
}
if (e.key === "k") {
// Runs if statement only when the k key is released
total++; //adds 1 everytime the "k" key is pressed
el_counterP.style.transform = `translateX(${total * 20}%)`; // moves the el_counterP paragraph along the X-axis by 20% of the total
el_counterP.innerHTML = total + " presses"; // Gives the el_counterP paragraph text of the current total value + a string value of "pressed"
appendCounterDivClass.appendChild(el_counterP); //puts/appends the el_counterP paragraph wherever the class of appendCounterDivClass is on the page (also find in html)
if (total >= 5) {
// Player k's win conditon is achieved when the total is greater than or equal to 5
console.log("player-K Wins!"); //runs a log when player k wins
window.removeEventListener("keyup", keyUpEvent); // kills the window event listener
}
}
};
//Event Listeners
window.addEventListener("keyup", keyUpEvent); // listens for the release of any key pressed while on the window variable (document queryselector whole page)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Global Variables
let total = 0; //holds the current total assigned by the if statement in the keyUpEvent function
//Cached DOM Nodes
const appendCounterDivClass = document.querySelector(".appendCounterDivClass"); //This class appends the el_counterP paragraph to the page
const el_counterP = document.createElement("p"); //This variable creates a paragraph to hold the values of the total returned by the keyUpEvent function
el_counterP.setAttribute("class", "count"); // Gives the el_counterP paragraph a class of count
el_counterP.innerHTML = 0 + " presses"; // Gives the el_counterP paragraph text a starter value of 0 + a string value of "pressed"
el_counterP.style.marginLeft = "50%"; // Centers the el_counterP paragraph on the page
appendCounterDivClass.appendChild(el_counterP); //puts/appends the el_counterP paragraph wherever the class of appendCounterDivClass is on the page (also find in html)
//Functions
const keyUpEvent = (e) => {
// This function passes the keyup events from the windows event listener
if (e.key === "s") {
// Runs if statement only when the s key is released
total--; //subtracts 1 everytime the "s" key is pressed
el_counterP.style.transform = `translateX(${total * 20}%)`; // moves the el_counterP paragraph along the X-axis by 20% of the total
el_counterP.innerHTML = total + " presses"; // Gives the el_counterP paragraph text of the current total value + a string value of "pressed"
if (total <= -5) {
// Player s's win conditon is achieved when the total is greater than or equal to 5
console.log("player-S Wins!"); //runs a log when player s wins
window.removeEventListener("keyup", keyUpEvent); // kills the window event listener
}
}
if (e.key === "k") {
// Runs if statement only when the k key is released
total++; //adds 1 everytime the "k" key is pressed
el_counterP.style.transform = `translateX(${total * 20}%)`; // moves the el_counterP paragraph along the X-axis by 20% of the total
el_counterP.innerHTML = total + " presses"; // Gives the el_counterP paragraph text of the current total value + a string value of "pressed"
if (total >= 5) {
// Player k's win conditon is achieved when the total is greater than or equal to 5
console.log("player-K Wins!"); //runs a log when player k wins
window.removeEventListener("keyup", keyUpEvent); // kills the window event listener
}
}
};
//Event Listeners
window.addEventListener("keyup", keyUpEvent); // listens for the release of any key pressed while on the window variable (document queryselector whole page)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Global Variables
let total = 0; //holds the current total assigned by the if statement in the keyUpEvent function
//Cached DOM Nodes
const appendCounterDivClass = document.querySelector(".appendCounterDivClass"); //This class appends the el_counterP paragraph to the page
const startGameModal = document.querySelector(".modal"); // Selects the starting game modal with the .modal class
const startGameButtonModal = document.querySelector(".start-game"); // Selects the button on the start-game modal
const el_counterP = document.createElement("p"); //This variable creates a paragraph to hold the values of the total returned by the keyUpEvent function
el_counterP.setAttribute("class", "count"); // Gives the el_counterP paragraph a class of count
el_counterP.innerHTML = 0 + " presses"; // Gives the el_counterP paragraph text a starter value of 0 + a string value of "pressed"
el_counterP.style.marginLeft = "50%"; // Centers the el_counterP paragraph on the page
appendCounterDivClass.appendChild(el_counterP); //puts/appends the el_counterP paragraph wherever the class of appendCounterDivClass is on the page (also find in html)
//Functions
const keyUpEvent = (e) => {
// This function passes the keyup events from the windows event listener
if (e.key === "s") {
// Runs if statement only when the s key is released
total--; //subtracts 1 everytime the "s" key is pressed
el_counterP.style.transform = `translateX(${total * 38}%)`; // moves the el_counterP paragraph along the X-axis by 20% of the total
el_counterP.innerHTML = total + " presses"; // Gives the el_counterP paragraph text of the current total value + a string value of "pressed"
if (total <= -5) {
// Player s's win conditon is achieved when the total is greater than or equal to 5
console.log("player-S Wins!"); //runs a log when player s wins
window.removeEventListener("keyup", keyUpEvent); // kills the window event listener
}
}
if (e.key === "k") {
// Runs if statement only when the k key is released
total++; //adds 1 everytime the "k" key is pressed
el_counterP.style.transform = `translateX(${total * 22}%)`; // moves the el_counterP paragraph along the X-axis by 20% of the total
el_counterP.innerHTML = total + " presses"; // Gives the el_counterP paragraph text of the current total value + a string value of "pressed"
if (total >= 5) {
// Player k's win conditon is achieved when the total is greater than or equal to 5
console.log("player-K Wins!"); //runs a log when player k wins
window.removeEventListener("keyup", keyUpEvent); // kills the window event listener
}
}
};
//Event Listeners
startGameButtonModal.addEventListener("click", () => {
//start game modal button click event listener
startGameModal.style.display = "none"; // makes the modal disappear once the startGameButtonModal element has been pressed
window.addEventListener("keyup", keyUpEvent); // listens for the release of any key pressed while on the window variable (document queryselector whole page)
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

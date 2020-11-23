//Global Variables
let total = 0; //holds the current total assigned by the if statement in the keyUpEvent function
//Cached DOM Nodes
const appendRatImgClass = document.querySelector(".appendRatImgClass"); //This class appends the el_ratsImg paragraph to the page
const startGameModal = document.querySelector(".modal"); // Selects the starting game modal with the .modal class
const startGameButtonModal = document.querySelector(".start-game"); // Selects the button on the start-game modal
const el_ratsImg = document.createElement("img"); //This variable creates a paragraph to hold the values of the total returned by the keyUpEvent function
const backgroundMusic = document.querySelector(".backgroundMusic");
backgroundMusic.volume = 0.3;
const soundEffect = document.querySelector(".soundEffect");
const soundEffect2 = document.querySelector(".soundEffect2");
const body = document.querySelector("body");
const countDownP = document.createElement("p");
countDownP.setAttribute("class", "countDownP");
const endModal1 = document.querySelector(".endModal1");
const endModal2 = document.querySelector(".endModal2");
const restart1 = document.querySelector(".restart1");
const restart2 = document.querySelector(".restart2");
//Functions
const countDownTimer = () => {
  let seconds = 5;
  const decramentor = setInterval(() => {
    countDownP.innerHTML = seconds;
    body.appendChild(countDownP);
    seconds--;
    soundEffect2.src = "assets/countdownBeep.wav";
    if (seconds === -1) {
      countDownP.innerHTML = "START!";
      soundEffect2.src = "assets/startBeep.mp3";
      window.addEventListener("keyup", keyUpEvent); // listens for the release of any key pressed while on the window variable (document queryselector whole page)
    }
    if (seconds === -2) {
      soundEffect2.src = "";
      countDownP.style.display = "none";
      clearInterval(decramentor);
    }
  }, 1000);
};
const keyUpEvent = (e) => {
  // This function passes the keyup events from the windows event listener
  if (e.key === "s") {
    // Runs if statement only when the s key is released
    total--; //subtracts 1 everytime the "s" key is pressed
    el_ratsImg.style.transform = `translateX(${total * 26.5}%)`; // moves the el_ratsImg paragraph along the X-axis by 20% of the total
    soundEffect.src = "assets/ratPull2.wav";
    if (total <= -5) {
      // Player s's win conditon is achieved when the total is greater than or equal to 5
      console.log("player-S Wins!"); //runs a log when player s wins
      endModal1.style.display = "block";
      window.removeEventListener("keyup", keyUpEvent); // kills the window event listener
      backgroundMusic.src = "assets/win.wav";
      soundEffect2.src = "assets/lose.wav";
    }
  }
  if (e.key === "k") {
    // Runs if statement only when the k key is released
    total++; //adds 1 everytime the "k" key is pressed
    el_ratsImg.style.transform = `translateX(${total * 28}%)`; // moves the el_ratsImg paragraph along the X-axis by 20% of the total
    soundEffect.src = "assets/ratPull1.wav";
    if (total >= 5) {
      // Player k's win conditon is achieved when the total is greater than or equal to 5
      console.log("player-K Wins!"); //runs a log when player k
      endModal2.style.display = "block";
      window.removeEventListener("keyup", keyUpEvent); // kills the window event listener
      backgroundMusic.src = "assets/win.wav";
      soundEffect2.src = "assets/lose.wav";
    }
  }
};
//Event Listeners
startGameButtonModal.addEventListener("mouseover", () => {
  soundEffect.src = "assets/buttonHover.wav";
});
restart1.addEventListener("mouseover", () => {
  soundEffect.src = "assets/buttonHover.wav";
});
restart1.addEventListener("click", () => {
  soundEffect2.src = "assets/startGameButtonSound.wav";
  location.reload();
  return false;
});
restart2.addEventListener("mouseover", () => {
  soundEffect.src = "assets/buttonHover.wav";
});
restart2.addEventListener("click", () => {
  soundEffect2.src = "assets/startGameButtonSound.wav";
  location.reload();
  return false;
});
startGameButtonModal.addEventListener("click", () => {
  //start game modal button click event listener
  soundEffect.src = "assets/startGameButtonSound.wav";
  backgroundMusic.src = "assets/gameBGMusic.wav";
  startGameModal.style.display = "none"; // makes the modal disappear once the startGameButtonModal element has been pressed
  el_ratsImg.src = "assets/rats.png"; // Gives the el_ratsImg paragraph a class of count
  el_ratsImg.style.marginLeft = "41%"; // Centers the el_ratsImg paragraph on the page
  el_ratsImg.style.marginTop = "38%"; // Centers the el_ratsImg paragraph on the page
  appendRatImgClass.appendChild(el_ratsImg); //puts/appends the el_ratsImg paragraph wherever the class of appendCounterDivClass is on the page (also find in html)
  countDownTimer();
});

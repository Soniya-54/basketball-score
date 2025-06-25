let homeScore = 0;
let guestScore = 0;

document.getElementById("home-score").textContent = homeScore;
document.getElementById("guest-score").textContent = guestScore;


// Home Score Functionality
function homeAddOne(){
  homeScore += 1;
  document.getElementById("home-score").textContent = homeScore;
}

function homeAddTwo(){
  homeScore += 2;
  document.getElementById("home-score").textContent = homeScore;
}

function homeAddThree(){
  homeScore += 3;
  document.getElementById("home-score").textContent = homeScore;
}


// Guest Score Functionality
function guestAddOne(){
  guestScore += 1;
  document.getElementById("guest-score").textContent = guestScore;
}

function guestAddTwo(){
  guestScore += 2;
  document.getElementById("guest-score").textContent = guestScore;
}

function guestAddThree(){
  guestScore += 3;
  document.getElementById("guest-score").textContent = guestScore;
}
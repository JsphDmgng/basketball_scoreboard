

let homeScoreBtnOne = document.getElementById("home-btn1");
let homeScoreBtnTwo = document.getElementById("home-btn2");
let homeScoreBtnThree = document.getElementById("home-btn3");
let homeEl = document.getElementById("home-Score");

let guestScoreBtnOne = document.getElementById("guest-btn1");
let guestScoreBtnTwo = document.getElementById("guest-btn2");
let guestScoreBtnThree = document.getElementById("guest-btn3");
let guestEl = document.getElementById("guest-Score");

let forHome = 0
let forGuest = 0


function increaseHome1(){
    forHome += 1 ;
    homeEl.textContent = forHome ;
}
function increaseHome2(){
    forHome += 2 ;
    homeEl.textContent = forHome ;
}
function increaseHome3(){
    forHome += 3 ;
    homeEl.textContent = forHome ;
}

function increaseGuest1(){
    forGuest += 1 ;
    guestEl.textContent = forGuest ;
}
function increaseGuest2(){
    forGuest += 2 ;
    guestEl.textContent = forGuest ;
}
function increaseGuest3(){
    forGuest += 3 ;
    guestEl.textContent = forGuest ;
}


let modal = document.getElementById("myModal");

let btn = document.getElementById("myButton");

let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}


window.onbeforeunload = () => {
  for(const form of document.getElementsByTagName('form')) {
    form.reset();
  }
}



let modalOne = document.getElementById("myModalWindowOne");

let btnOne = document.getElementById("learn-more-btn-one");

let spanOne = document.getElementsByClassName("close-window-one")[0];

btnOne.onclick = function() {
  modalOne.style.display = "block";
}

spanOne.onclick = function() {
  modalOne.style.display = "none";
}



let modalTwo = document.getElementById("myModalWindowTwo");

let btnTwo = document.getElementById("learn-more-btn-two");

let spanTwo = document.getElementsByClassName("close-window-two")[0];

btnTwo.onclick = function() {
  modalTwo.style.display = "block";
}

spanTwo.onclick = function() {
  modalTwo.style.display = "none";
}



let modalThree = document.getElementById("myModalWindowThree");

let btnThree = document.getElementById("learn-more-btn-three");

let spanThree = document.getElementsByClassName("close-window-three")[0];

btnThree.onclick = function() {
  modalThree.style.display = "block";
}

spanThree.onclick = function() {
  modalThree.style.display = "none";
}



let modalFour = document.getElementById("myModalWindowFour");

let btnFour = document.getElementById("learn-more-btn-four");

let spanFour = document.getElementsByClassName("close-window-four")[0];

btnFour.onclick = function() {
  modalFour.style.display = "block";
}

spanFour.onclick = function() {
  modalFour.style.display = "none";
}



let modalFive = document.getElementById("myModalWindowFive");

let btnFive = document.getElementById("learn-more-btn-five");

let spanFive = document.getElementsByClassName("close-window-five")[0];

btnFive.onclick = function() {
  modalFive.style.display = "block";
}

spanFive.onclick = function() {
  modalFive.style.display = "none";
}



let modalSix = document.getElementById("myModalWindowSix");

let btnSix = document.getElementById("learn-more-btn-six");

let spanSix = document.getElementsByClassName("close-window-six")[0];

btnSix.onclick = function() {
  modalSix.style.display = "block";
}

spanSix.onclick = function() {
  modalSix.style.display = "none";
}



let modalSeven = document.getElementById("myModalWindowSeven");

let btnSeven = document.getElementById("learn-more-btn-seven");

let spanSeven = document.getElementsByClassName("close-window-seven")[0];

btnSeven.onclick = function() {
  modalSeven.style.display = "block";
}

spanSeven.onclick = function() {
  modalSeven.style.display = "none";
}
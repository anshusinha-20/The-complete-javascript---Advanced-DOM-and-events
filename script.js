"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach(function (i) {
  i.addEventListener("click", openModal);
});

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

// 186. selecting, creating and deleting elements

// selecting elements
console.log(document.documentElement); // selects entire html document
console.log(document.head); // selects the head
console.log(document.body); // selects the body

// querySelector
const header = document.querySelector(".header");
// querySelectorAll
const allSections = document.querySelectorAll(".section");
console.log(allSections);

// getElementById
console.log(document.getElementById("section--1"));
// getElementsByTagName
const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

// getElementsByClassName
console.log(document.getElementsByClassName("btn"));

// creating and inserting elements
const message = document.createElement("div");
message.classList.add("cookie-message");

message.innerHTML =
  "Galactic Credits Union uses cookies to improve your banking experience. <button class='btn btn--close-cookie'>Got it!</button>";

// header.prepend(message);
header.append(message);

// header.before(message);
// header.after(message);

// delete elements
document
  .querySelector(".btn--close-cookie")
  .addEventListener("click", function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

/////

// 187. styles, attributes and classes

// styles
message.style.backgroundColor = "#03045e";
message.style.width = "120%";
message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 40 + "px";

// attributes
// standard
const logo = document.querySelector(".nav__logo");
console.log(logo.src);
console.log(logo.alt);
console.log(logo.className);

// non-standard
console.log(logo.getAttribute("designer"));
console.log(logo.getAttribute("src"));

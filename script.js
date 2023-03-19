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
  "Welcome to Galactic Credits Union! Just like every planet has its own unique flavor, we use cookies to enhance your browsing experience and make banking with us even more convenient. By using our app, you consent to our use of cookies. To learn more, please read our Cookie Policy. <button class='btn btn--close-cookie'>Got it!</button>";

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

"use strict";

// TẠO EMAIL INPUT

const hiddenInfo = document.querySelector(".hidden-info");
const instructionText = document.querySelector(".instruction");
const warningText = document.querySelector(".warning");
let inputContent = document.querySelector(".input").value;
const buttonClick = document.querySelector(".button");

// TRẠNG THÁI BAN ĐẦU
hiddenInfo.classList.add("hidden");
warningText.classList.add("hidden");

// SAU KHI SUBMIT
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const validEmail = regex.test(inputContent);
console.log(validEmail);

buttonClick.addEventListener("click", function () {
  if (validEmail) {
    hiddenInfo.classList.remove("hidden");
  } else {
    instructionText.classList.add("hidden");
    warningText.classList.remove("hidden");
  }
});

// EM CHƯA THỂ TÌM RA CÁCH ĐỂ RESET GIÁ TRỊ INPUT SAU MỖI LẦN NHẬP SAI
// NÊN SAU MỖI LẦN NHẬP SAI SẼ PHẢI RESET WEB MỚI CÓ THỂ NHẬP LẠI GIÁ TRỊ TỪ ĐẦU

// ẨN THÔNG TIN JOB
const grid2 = document.querySelector("#grid-cont2");
console.log(grid2.firstElementChild.nextElementSibling);
const grid2Slot2 = grid2.firstElementChild.nextElementSibling;
const grid2Slot3 =
  grid2.firstElementChild.nextElementSibling.nextElementSibling;
const grid2Slot5 = grid2.lastElementChild.previousElementSibling;
const grid2Slot4 =
  grid2.lastElementChild.previousElementSibling.previousElementSibling;
// EXPERIENCE
const hiddenExp = document.querySelector(".hidden-exp");
hiddenExp.classList.add("hidden");
const viewMoreClick1 = document.querySelector("#view-more1");
const viewLessClick1 = document.querySelector("#view-less1");
viewMoreClick1.classList.add("hidden");
viewLessClick1.classList.add("hidden");
// SỬ DỤNG DOM TRAVERSE VÀ MOUSEOVER FUNCTION
grid2.firstElementChild.addEventListener("mouseover", function () {
  viewMoreClick1.classList.remove("hidden");
});
grid2.firstElementChild.addEventListener("mouseout", function () {
  viewMoreClick1.classList.add("hidden");
});
// SỬ DỤNG CLICK FUNCTION
viewMoreClick1.addEventListener("click", function () {
  hiddenExp.classList.remove("hidden");
  viewLessClick1.classList.remove("hidden");
});
viewLessClick1.addEventListener("click", function () {
  hiddenExp.classList.add("hidden");
  viewLessClick1.classList.add("hidden");
  viewMoreClick1.classList.remove("hidden");
});

// SKILLS
const hiddenSkills = document.querySelector(".hidden-skills");
hiddenSkills.classList.add("hidden");
const viewMoreClick2 = document.querySelector("#view-more2");
const viewLessClick2 = document.querySelector("#view-less2");
viewMoreClick2.classList.add("hidden");
viewLessClick2.classList.add("hidden");

grid2Slot2.addEventListener("mouseover", function () {
  viewMoreClick2.classList.remove("hidden");
});
grid2Slot2.addEventListener("mouseout", function () {
  viewMoreClick2.classList.add("hidden");
});

viewMoreClick2.addEventListener("click", function () {
  hiddenSkills.classList.remove("hidden");
  viewLessClick2.classList.remove("hidden");
  viewMoreClick2.classList.add("hidden");
});
viewLessClick2.addEventListener("click", function () {
  hiddenSkills.classList.add("hidden");
  viewLessClick2.classList.add("hidden");
  viewMoreClick2.classList.remove("hidden");
});

// LANGUAGE
const hiddenLanguages = document.querySelector(".hidden-languages");
hiddenLanguages.classList.add("hidden");
const viewMoreClick3 = document.querySelector("#view-more3");
const viewLessClick3 = document.querySelector("#view-less3");
viewMoreClick3.classList.add("hidden");
viewLessClick3.classList.add("hidden");

grid2Slot3.addEventListener("mouseover", function () {
  viewMoreClick3.classList.remove("hidden");
});
grid2Slot3.addEventListener("mouseout", function () {
  viewMoreClick3.classList.add("hidden");
});

viewMoreClick3.addEventListener("click", function () {
  hiddenLanguages.classList.remove("hidden");
  viewLessClick3.classList.remove("hidden");
  viewMoreClick3.classList.add("hidden");
});
viewLessClick3.addEventListener("click", function () {
  hiddenLanguages.classList.add("hidden");
  viewLessClick3.classList.add("hidden");
  viewMoreClick3.classList.remove("hidden");
});

// ACT
const hiddenActs = document.querySelector(".hidden-acts");
hiddenActs.classList.add("hidden");
const viewMoreClick4 = document.querySelector("#view-more4");
const viewLessClick4 = document.querySelector("#view-less4");
viewMoreClick4.classList.add("hidden");
viewLessClick4.classList.add("hidden");

grid2Slot4.addEventListener("mouseover", function () {
  viewMoreClick4.classList.remove("hidden");
});
grid2Slot4.addEventListener("mouseout", function () {
  viewMoreClick4.classList.add("hidden");
});

viewMoreClick4.addEventListener("click", function () {
  hiddenActs.classList.remove("hidden");
  viewLessClick4.classList.remove("hidden");
  viewMoreClick4.classList.add("hidden");
});
viewLessClick4.addEventListener("click", function () {
  hiddenActs.classList.add("hidden");
  viewLessClick4.classList.add("hidden");
  viewMoreClick4.classList.remove("hidden");
});

// KNOWLEDGES
const hiddenKnowledges = document.querySelector(".hidden-knowledges");
hiddenKnowledges.classList.add("hidden");
const viewMoreClick5 = document.querySelector("#view-more5");
const viewLessClick5 = document.querySelector("#view-less5");
viewMoreClick5.classList.add("hidden");
viewLessClick5.classList.add("hidden");

grid2Slot5.addEventListener("mouseover", function () {
  viewMoreClick5.classList.remove("hidden");
});
grid2Slot5.addEventListener("mouseout", function () {
  viewMoreClick5.classList.add("hidden");
});

viewMoreClick5.addEventListener("click", function () {
  hiddenKnowledges.classList.remove("hidden");
  viewLessClick5.classList.remove("hidden");
  viewMoreClick5.classList.add("hidden");
});
viewLessClick5.addEventListener("click", function () {
  hiddenKnowledges.classList.add("hidden");
  viewLessClick5.classList.add("hidden");
  viewMoreClick5.classList.remove("hidden");
});

// ICONS
const hiddenIcons = document.querySelector(".hidden-icons");
hiddenIcons.classList.add("hidden");
const viewMoreClick6 = document.querySelector("#view-more6");
const viewLessClick6 = document.querySelector("#view-less6");
viewMoreClick6.classList.add("hidden");
viewLessClick6.classList.add("hidden");

grid2.lastElementChild.addEventListener("mouseover", function () {
  viewMoreClick6.classList.remove("hidden");
});
grid2.lastElementChild.addEventListener("mouseout", function () {
  viewMoreClick6.classList.add("hidden");
});

viewMoreClick6.addEventListener("click", function () {
  hiddenIcons.classList.remove("hidden");
  viewLessClick6.classList.remove("hidden");
  viewMoreClick6.classList.add("hidden");
});
viewLessClick6.addEventListener("click", function () {
  hiddenIcons.classList.add("hidden");
  viewLessClick6.classList.add("hidden");
  viewMoreClick6.classList.remove("hidden");
});

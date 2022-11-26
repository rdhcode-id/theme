"use strict";

const topbar = document.querySelector(".topbar");
const overlay = document.querySelector(".overlay");

// Show search in mobile
const showSearch = document.querySelector(".bottom__container_search");
const upSearch = document.querySelector(".upSearch");
const searchX = document.querySelector(".searchX");

// Scroll top
const btnTop = document.querySelector(".bottom__container_top i");

showSearch.addEventListener("click", () => {
  upSearch.classList.toggle("upSearch");
  overlay.classList.toggle("overlayadd");
  overlay.addEventListener("click", () => {
    overlay.classList.toggle("overlayadd");
    upSearch.classList.toggle("upSearch");
  });
});
searchX.addEventListener("click", () => {
  showSearch.click();
});
// Scroll event
var prevScrollpos = window.pageYOffset;
function createScrollStopListener(element, callback, timeout) {
  var handle = null;
  var onScroll = function () {
    if (handle) {
      clearTimeout(handle);
    }
    handle = setTimeout(callback, timeout || 200); // default 200 ms
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      topbar.classList.remove("upScrol");
    } else if (prevScrollpos < currentScrollPos) {
      topbar.classList.add("upScrol");
    } else if (null) {
      topbar.classList.remove("upScrol");
    }
    prevScrollpos = currentScrollPos;
  };
  element.addEventListener("scroll", onScroll);
  return function () {
    element.removeEventListener("scroll", onScroll);
  };
}

createScrollStopListener(window, function () {
  topbar.classList.remove("upScrol");
  // Stop scroll
  // console.log("onscrollstop");
});

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTop.classList.add("hoverbtm");
  } else {
    btnTop.classList.remove("hoverbtm");
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
btnTop, addEventListener("click", topFunction);

let theme = localStorage.getItem("data-theme");
const changeThemeToDark = () => {
  document.documentElement.setAttribute("data-theme", "dark"); // set theme to dark
  localStorage.setItem("data-theme", "dark"); // save theme to local storage
};

const changeThemeToLight = () => {
  document.documentElement.setAttribute("data-theme", "light"); // set theme light
  localStorage.setItem("data-theme", "light"); // save theme to local storage
};

const btnDark0 = document.querySelector(".topbar__notiv_togle");
const btnDark = document.querySelector(".bottom__container_toggle");

// Apply retrived them to the website
btnDark0.addEventListener("click", () => {
  let theme = localStorage.getItem("data-theme"); // Retrieve saved them from local storage
  if (theme === "dark") {
    changeThemeToLight();
    btnDark0.children[0].classList.replace("icon-rdh_siang", "icon-rdh_malam");
    btnDark.children[0].classList.replace("icon-rdh_siang", "icon-rdh_malam");
  } else {
    changeThemeToDark();
    btnDark0.children[0].classList.replace("icon-rdh_malam", "icon-rdh_siang");
    btnDark.children[0].classList.replace("icon-rdh_malam", "icon-rdh_siang");
  }
});
btnDark.addEventListener("click", () => {
  btnDark0.click();
});

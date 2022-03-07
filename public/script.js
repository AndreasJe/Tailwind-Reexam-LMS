document.querySelector("DOMContentLoaded", start);

document.addEventListener("DOMContentLoaded", start);

function start() {
  burgerMenu();
}

function burgerMenu() {
  console.log("Page has been loaded");
  document.querySelector("#menuknap").addEventListener("click", toggleMenu);
}

//Funktion til Bugermenu
function toggleMenu() {
  console.log("toggleBurger");
  document.querySelector("#drawer").classList.toggle("h-0");

  let erSkjult = document.querySelector("#drawer").classList.contains("h-0");

  if (erSkjult == true) {
    document.querySelector("#menuknap img").src = "icons/burger.svg";
    document.querySelector("#drawer").classList.add("invisible");
    document.querySelector("#drawer").classList.add("h-0");
  } else {
    document.querySelector("#menuknap img").src = "icons/cross.svg";
    document.querySelector("#drawer").classList.remove("invisible");
    document.querySelector("#drawer").classList.add("h-fit");
  }
}

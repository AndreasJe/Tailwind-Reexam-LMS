//Selecting the DOM
document.querySelector("DOMContentLoaded", start);

//Event listener waiting for DOM to finish loading
document.addEventListener("DOMContentLoaded", start);

//Event listener kicks off the Burger menu function
function start() {
  burgerMenu();
}

//Event listeners
function burgerMenu() {
  console.log("Page has been loaded");
  document.querySelector("#menuknap").addEventListener("click", toggleMenu);
  document
    .querySelector("#reorderActivate")
    .addEventListener("click", toggleReorder);
}

//Burger menu - toggle drawer
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

//Reorder functionality on "My Courses"-page
function toggleReorder() {
  console.log("toggleReorder");
  document.querySelector("#sortable").classList.toggle("hidden");

  let erSkjult = document
    .querySelector("#sortable")
    .classList.contains("hidden");

  if (erSkjult == true) {
    document.querySelector("#sortable").classList.add("block");
    document.querySelector("#unsortable").classList.remove("hidden");
    document.querySelector("#reorderActivate").innerHTML = "Reorder";
  } else {
    document.querySelector("#unsortable").classList.add("hidden");
    document.querySelector("#sortable").classList.remove("block");
    document.querySelector("#reorderActivate").innerHTML = "Confirm";
  }
}

//NICE TO HAVE:
//Save the ordering in local_storage or something, so it wont revert back to default position.

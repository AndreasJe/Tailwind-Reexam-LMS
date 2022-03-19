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

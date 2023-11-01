const dodger = document.getElementById("dodger");

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

function moveDodgerRight() {
  //strip out the px from the current style property
  const rightNumbers = dodger.style.left.replace("px", "");
  //convert that number into an integer
  const right = parseInt(rightNumbers, 10);
//update the style property by adding one to the number, provided it is less than 360, the border of the body
  dodger.style.left = (`${right + 1}px`);
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
  else if (e.key === "ArrowRight") {
    moveDodgerRight();
  }

});

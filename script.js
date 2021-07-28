const h4 = document.createElement('h4');
h4.textContent = "(7/28/2021)"; 
document.querySelector('body').appendChild(h4); 

const dodger = document.getElementById("dodger"); 

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  }); 
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 100) {
      dodger.style.left = `${left - 100}px`;
    }
  } 



  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  }); 
function moveDodgerRight() {
    const rightNumbers = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumbers, 10);
  
    if (right < 1550) {
      dodger.style.left = `${right + 100}px`;
    }
  } 
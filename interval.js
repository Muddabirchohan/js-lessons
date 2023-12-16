
console.log("hiiii")

// variable to store our intervalID
let nIntervId;
let nIntervId2;

function changeColor() {
  // check if an interval has already been set up
  if (!nIntervId) {
    nIntervId = setInterval(flashText, 1000);
    nIntervId2 = setInterval(1000);
  }
  
}

function flashText() {
  const oElem = document.getElementById("my_box");
  oElem.className = oElem.className === "go" ? "stop" : "go";
}

function stopTextColor() {
  clearInterval(nIntervId);
  // release our intervalID from the variable
  nIntervId = null;
  nIntervId2 = null;
  console.log("id",nIntervId)
  console.log("id2",nIntervId2)
}

document.getElementById("start").addEventListener("click", changeColor);
document.getElementById("stop").addEventListener("click", stopTextColor);
//let title = document.getElementById("title");
let btn = document.getElementById("btn");
let btn2 = document.getElementById("btn2");

let count = 0;

function counter() {
  count += 1;
  title.innerText = count + " keer geklikt";
  document.body.style.backgroundColor = "blue";
  btn.style.backgroundColor = "red";
}

//maak een functie genaamd counter2
function counter2() {
  count -= 1;
  title.innerText = count + " keer geklikt";
  document.body.style.backgroundColor = "red";
  btn2.style.backgroundColor = "blue";
}

// op plus worden de knoppen rood
// op min worden de knoppen blauw

document.getElementById("title").style.color = "red";

let hour = 17;

if (hour > 18) {
  console.log("Het is avond");
} else if (hour < 12) {
  console.log("het is ochtend");
} else {
  console.log("Het is middag");
}

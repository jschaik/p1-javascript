let budget = 100;

let product = prompt("hoeveel kost het product?")

let h1 = document.getElementById("uitkomst");

if (budget > product) {
  h1.innerText = "ik heb genoeg geld";
  h1.style.color = "green";
} else {
  h1.innerText = "ik heb te weinig geld";

}

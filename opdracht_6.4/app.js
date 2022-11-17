// // //keersom

// // function multiply() {
// //   let antwoord = document.getElementById("nummertje");
// //   let input1 = document.getElementById("input1").value;
// //   let input2 = document.getElementById("input2").value;

// //   if (input1 > 0 && input2 > 0) {
// //     let answer = input1 * input2;

// //     antwoord.innerText = "het antwoord is: " + answer;
// //   }

// //   else {
// //     antwoord.innerText = "het getal is te laag"
// //   }
// // }

//Delen door
function devide() {
  let antwoord = document.getElementById("nummertje");
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;

  let answer = input1 / input2;

  antwoord.innerText = "het antwoord is: " + answer;
}
// // //plus door
// // function add() {
// //   let antwoord = document.getElementById("nummertje");
// //   let input1 = document.getElementById("input1").value;
// //   let input2 = document.getElementById("input2").value;

// //   let answer = Number(input1) + Number(input2);

// //   antwoord.innerText = "het antwoord is: " + answer;
// // }

// // function minus() {
// //   let antwoord = document.getElementById("nummertje");
// //   let input1 = document.getElementById("input1").value;
// //   let input2 = document.getElementById("input2").value;

// //   let answer = input1 - input2;

// //   antwoord.innerText = "het antwoord is: " + answer;
// // }

// // declareren van een variabele
// let x = 5;

// // == is gelijk aan
// x == 8 // false, want 5 is niet gelijk aan 8

// // === is gelijk aan waarde en data type
// x === 5 // true, want 5 is een number en geen string
// x === "5" // false, want 5 is een number en geen string

// // != niet gelijk aan
// x != 8 //true, want 8 is niet gelijk aan 5

// // !== niet gelijk aan en niet gelijk aan data type
// x !== 5 // false, want de waarde is WEL 5 en WEL een number
// x !== 8 // true, want de waarde is inderdaad geen 8
// x !== "5" //true, want de waarde is geen string maar een number

// // > groter dan
// x > 8 // false, want 5 is niet groter dan 8

// // < kleiner dan
// x < 8 //true, want 5 is kleiner dan 8

// // >= groter dan of gelijk aan
// x >= 8 //false, want 5 is niet groter of gelijk aan 8

// // <= kleiner dan of gelijk aan
// x <= 8 //true, want 5 is kleiner dan 8
// x <= 5 // true, want 5 is niet kleiner dan 5 maar wel gelijk aan 5

// //declareren van variabelen
// let x = 6;
// let y = 3;

// // && and, beide vergelijkingen moeten waar zijn.
// (x < 10 && y > 1) //true, want x is kleiner dan 10 EN y is groter dan 1

// // || or, één van de twee vergelijkingen moet waar zijn
// (x == 5 || y == 5) //false, want beide vergelijkingen zijn niet waar
// (x < 10 || y < 2) // true, de eerste vergelijking is waar, de tweede niet maar 1 van de twee moet waar zijn

// // ! not
// !(x == y) //true, want x is niet gelijk aan y
// !(x > y) //false, want x is wel groter dan y


// let a = 9;
// let b = 10

// if(a < 8){
//   console.log("ik ben waar ");
// } else if(a > 8) {
//   console.log("ik ben toch wel groter")
// }
// else {
//   console.log("ik ben niet waar")
// }


function kleur_aanpassen() {
  document.getElementById("").style.color ="red";
}

kleur_aanpassen();



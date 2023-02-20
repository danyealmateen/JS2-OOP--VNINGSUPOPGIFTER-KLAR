import { Dice } from "./modules/dice.js";

let dieOne = document.querySelector(".die");
let btnFreeze = document.getElementById("btnFreeze");
let btnUnFreeze = document.getElementById("btnUnFreeze");
const dicey = new Dice();

btnFreeze.addEventListener("click", () => {
  dicey.freeze(true);
  console.log("frozen clicked");
});

btnUnFreeze.addEventListener("click", () => {
  dicey.unFreeze(false);
  console.log("unfrozen clicked");
});

dieOne.addEventListener("click", () => {
  dicey.roll(3);
});

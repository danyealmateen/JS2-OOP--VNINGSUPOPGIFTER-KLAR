import { Cardgame } from "./modules/cardgame.js";

const c1 = new Cardgame("spade", "Q", 13);
const c2 = new Cardgame("heart", "Kn", 11);

console.log(c1.isHigherThan(c2));
console.log(c2.isHigherThan(c1));

import { Animals } from "./modules/animals.js";

let header = document.getElementById("header");
let button = document.getElementById("button");
console.log(button);
console.log(header);

const dog = new Animals("Nelson", "Chihuahua", "Beige");
dog.logInfo();

const octopus = new Animals("Bluppi", "Octopus", "Pink");
octopus.logInfo();

const giraffe = new Animals("Chewy", "Giraffe", "Orange");
giraffe.logInfo();

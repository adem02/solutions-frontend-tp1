import {Parser} from "./Exercices/Parser";
import {Max} from "./Exercices/Max";
import {Occurrence} from "./Exercices/Occurrence";

// const p = new Parser(":");
// p.parse("8790: bonjour le monde:8987:7777:Hello World:    9007");
// console.log(p.getValue());

// console.log(new Max().getMax(70, 3, 30));

const o = new Occurrence([1, 1, 2, 3, 4, 8, 8, 5, 6, 6, 9, 9, 10, 11, 12, 14, 48, 48, 51, 51, 1, 1, 1,
    51, 3, 3, 3, 51, 51, 51, 51, 51, 0]);


console.log(o.mapOccurrences());



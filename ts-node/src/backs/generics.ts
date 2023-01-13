import { printObject, genericFunction, genericFunctionArror } from "../generics/generics";
import { Hero, Villain } from "../interfaces";
// import { Hero as SuperHero } from "./classes/Hero";
// import * as HeroClasses from "./classes/Hero";
// import powers,  { Power } from "./data/powers";


// const Hero = 123;

// const iroman = new SuperHero('Ironman', 1, 55)
// const iroman = new HeroClasses.Hero('Ironman', 1, 55)

// console.log(iroman.power);


// console.log(powers);


//? funciones genéricas

// printObject(123);
// printObject(new Date());
// printObject({a:1, b:2, c:3});
// printObject([1,2,3,4,5]);
// printObject('Hoola mundo');

// console.log(genericFunction(3.14156).toFixed(2));
// console.log(genericFunction('Hola Mundo').toUpperCase());
// console.log(genericFunctionArror(new Date()).toDateString());

const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Winston Wilson',
    dangerLevel: 130
}

console.log(genericFunction<Hero>(deadpool).realName);



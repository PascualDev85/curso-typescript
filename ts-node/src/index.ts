// import { getPokemon } from "./generics/get-pokemon";

import { Pokemon } from "./decorators/pokemon-class";


//? Ejemplo con get pokemon
// getPokemon(4)
//     .then( pokemon => console.log(pokemon.name))
//     .catch( err => console.log(err))
//     .finally(() => console.log('Fin de getPokemon'))
    

const charmander = new Pokemon('Charmander');

// (Pokemon.prototype as any).customName = 'Pikachu';

// console.log(charmander.savePokemon(-50));


charmander.publicApi = 'http://davi-vs.com'
console.log(charmander);


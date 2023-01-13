import powers from "../data/powers";


export class Hero {
    constructor(
        public name: string,
        public powerId: number,
        public age: number,
    ) {}

    get power():string {
        return powers.find( power => power.id === this.powerId )?.desc || 'not found';
        // ? Pregunta si es undefined
        // ! Obliga a TypeScript, con lo cual si hay un error peta. Hay que estar seguro que funciona.
    }
}

export class Hero2 {}
export class Hero3 {}
export class Hero4 {}

export const PI = 3.1416;

export const miNombre = 'David';


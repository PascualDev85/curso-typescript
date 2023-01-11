"use strict";
(() => {
    ;
    let flash = {
        nombre: 'Barry Allen',
        edad: 24,
        poderes: [1, 2]
    };
    let superman = {
        nombre: 'Clark Kent',
        edad: 60,
        poderes: [1],
        getNombre() {
            return this.nombre;
        }
    };
})();
(() => {
    class Mutant {
        mutanPower(id) {
            return `${this.name} tiene el poder de: ${this.realName}`;
        }
    }
})();
(() => {
    const client = {
        name: 'Juan',
        age: 35,
        address: {
            street: 'Calle falsa',
            number: 123
        },
        getFullAddress(id) {
            return this.address.street;
        }
    };
    console.log(client);
})();
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelear();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelear() {
        console.log("...... gogogo!!!");
    }
};
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    imprimirBio() {
        console.log(`Nombre: ${this.nombre}, edad: ${this.edad}, sexo: ${this.sexo}, estadoCivil: ${this.estadoCivil}`);
    }
}
(() => {
    let sumarNums = (a, b) => a + b;
    console.log(sumarNums(2, 3));
})();
//# sourceMappingURL=main.js.map
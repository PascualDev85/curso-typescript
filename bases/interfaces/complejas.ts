(() => {

    // Interfaz principal va arriba. Cuando haces una peticion http y necesitamos mapear la respuesta. Es común ver este tipo de estructuras
    // Las interfaces son invisibles para JS. Solo se ven en TS. En JS no existen, equivale a  0 código de JS.
    interface Client {
        name: string,
        age?: number,
        address: Address
        getFullAddress: (id:string) => string; // puede regresar cualquier tipo de dato, incluso CLient.
    }

    interface Address {
        street: string,
        number: number
    }
    
    const client:Client = {
        name: 'Juan',
        age: 35,
        address: {
            street: 'Calle falsa',
            number: 123
        },
        getFullAddress( id:string ) {
            return this.address.street;
        }
    }

    console.log(client);

})()
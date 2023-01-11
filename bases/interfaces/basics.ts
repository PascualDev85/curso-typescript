(() => {

    // interface es una forma de definir un tipo de dato. La diferencia es los tipos no son (expandir, añadir, extenderse) pero las interfaces si.
    // Las interfaces se utilizan para mdefinir peticiones http
    // Los tipos se utilizan para Redux, para definr que tipos de acciones son permitidas en el store (objeto global de la app)
    interface Heroe {
        nombre: string,
        edad?:number,
        poderes:number[],
        getNombre?: () => string
    };



    let flash: Heroe = {
        nombre: 'Barry Allen',
        edad: 24,
        poderes: [1, 2]
    };


    let superman: Heroe = {
        nombre: 'Clark Kent',
        edad: 60,
        poderes: [1],
        getNombre() {
            return this.nombre;
        }
    }
    

})();
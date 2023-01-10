(() => {
 
    // Definir un tipo de objeto
    type Heroe = {
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
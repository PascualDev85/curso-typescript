(() => {
    // los objetos a difrencia de las funciones no hace falta que esté por orden
    let flash: {nombre: string, edad?:number, poderes:string[], getNombre?: () => string} ={
        nombre: 'Barry Allen',
        edad: 24,
        poderes: ['Puede correr muy rápido', 'Viajar por el tiempo']
    };

    // flash = {
    //     nombre: 'Oliver Queen',
    //     // edad: 32,
    //     poderes: ['Tiene un arco'],
    //     getNombre() {
    //         return this.nombre;
    //     }
    // };

    // console.log(flash.getNombre() );

    let superman: {nombre: string, edad?:number, poderes:string[], getNombre?: () => string} ={
        nombre: 'Clark Kent',
        edad: 60,
        poderes: ['Puede volar', 'Super fuerza']
    }
    
  
  })();
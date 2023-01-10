(()=> {

    type Heroe = {
        nombre: string,
        edad?:number,
        poderes:number[],
        getNombre?: () => string
    };

    let myCustomVariable: (string | number | Heroe) = 'David';
    console.log(typeof myCustomVariable);

    myCustomVariable = 24;
    console.log(typeof myCustomVariable);

    myCustomVariable = {
        nombre: 'Clark Kent',
        edad: 60,
        poderes: [1],
    }
    console.log(typeof myCustomVariable);
    
})();
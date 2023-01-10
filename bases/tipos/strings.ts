(() => {

    const batman:string = "Batman";
    const linternaVerde:string = 'Linterna Verde';
    const volcanNegro:string = `Héreo: Volcan Negro`;

    

    console.log(`I'm ${batman}`);
    // puede pasar cualquier variable number a string
    console.log(batman.toUpperCase());

    console.log(batman[10]?.toUpperCase() || 'No está presente'); // null check
    
    


})()
(() => {

    // si lo pongo como any, no me va a marcar error y puedo asignarle cualquier tipo de dato a parte que no tengo intellisense. Tratar de evitarlo y no usarlo

    let avenger:any = 123;
    let exists;
    let power;

    avenger = 'Dr. Strange';
    // console.log(avenger.charAt(0));
    console.log((avenger as string).charAt(0)); // castearlo a string. Significa que es un string

    avenger = 150.5555;
    // console.log(avenger.toFixed(2));
    console.log(<number>avenger.toFixed(2)); // otra forma de castearlo a number

    console.log('exists', exists);
    console.log('power', power);
    

})()
(() => {


    const fullName = (firstName: string, lastName: string): string => {
        return `${firstName} ${lastName}`;
    }

    const name = fullName('Bruce', 'Wayne');
    // los argumentos son obligatorios con el tipo que estoy especificando
    
    console.log({name});
    

  
  })();
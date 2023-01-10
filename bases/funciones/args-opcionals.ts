(() => {


    const fullName = (firstName: string, lastName?: string): string => {
        return `${firstName} ${lastName || 'No last name'}`;
    }

    const name = fullName('Bruce');
    // los argumentos opcionales poniendo el signo de interrogacion despues del nombre de la variable
    
    console.log({name});
    

  
  })();
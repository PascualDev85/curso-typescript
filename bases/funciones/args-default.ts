(() => {


    const fullName = (firstName: string, lastName?: string, uppercase:      boolean = false): string => {
        if (uppercase) {
        return `${firstName} ${lastName || 'No last name'}`.toUpperCase();
        } else {
        return `${firstName} ${lastName || 'No last name'}`;
        }
    }

    const name = fullName('Bruce', 'Wayne', true);
    // los argumentos opcionales se tienen que poner al final de la funcion. Valor por defecto puede tener esta estructura
    
    console.log({name});
    

  
  })();
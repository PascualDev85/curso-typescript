(() => {

    // El never es un tipo de dato que nunca va a retornar un valor pero no es void
    const error = ( message: string ):(never|number) => {
        if (false) {
            throw new Error(message);
        }
        return 1;
    }

    error('Error critico...');
    console.log('Hola mundo');
    
  
  })();
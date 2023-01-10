(() => {

    const hero: string = 'Flash';

    function returnName(): string { // tipo de dato de retorno
        return hero;
    }

    const activateBatisignal = (): string => 'Batiseñal activada';

    console.log(typeof activateBatisignal);
    
    const heroName: string = returnName();

    console.log(heroName);

  
  })();
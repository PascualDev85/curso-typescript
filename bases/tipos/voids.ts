(() => {

    // void no hay valor de retorno (funciones que no retornan nada)
    function callBatman(): void {
        return;
    }

    const callSuperman = ():void => {
        return;
    }

    const a = callBatman();
    console.log(a);
  
  })();
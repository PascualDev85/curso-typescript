(() => {
    // Desestructuración de Objetos
    type Avenger = {
        nick: string,
        ironman: string,
        vision: string,
        activo: boolean,
        poder: number
    }

    const avengers: Avenger = {
        nick: 'Samuel Jackson',
        ironman: 'Robert Downey Jr',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.132456
    }

    const {poder, vision} = avengers;
    console.log(poder.toFixed(2), vision.toUpperCase());

    const printAvenger = ({ poder, ...resto }: Avenger) => {
        console.log(poder, resto);
        
    }

    printAvenger(avengers);
    
    // Desestructuración de Arreglos
    const avengersArr: string[] = ['Thor', 'Steve Rogers', 'Tony Stark'];
    const [thor, capi, ] = avengersArr;
    console.log({ thor, capi });

    // Desestructuración de Arreglos con  Tuplas
    const avengersTupla: [string, boolean, number] = ['Thor', true, 124.245];
    const [thorT, capiT, seriaUnNumero ] = avengersTupla;
    console.log({ thorT, capiT, seriaUnNumero });

    
 
 })()
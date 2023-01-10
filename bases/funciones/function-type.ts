(() => {

    const addNumbers = (a: number, b:number): number => a + b;
    const greet = (name: string): string => `Hello, ${name}`;
    const saveTheWorld = (): string => `The world is saved!`;

    let myFunction: () => string;
    //* let myFunction;
    // let myFunction: (y:number, z:number) => number;
    //? let myFunction: (y:string) => string;

    //* myFunction = 10;
    //* console.log(myFunction);

    // myFunction = addNumbers; // paso la referencia de la funcion no es una copia
    // console.log(myFunction(1, 5));

    //? myFunction = greet;
    //? console.log(myFunction('Spiderman'));

    myFunction = saveTheWorld;
    console.log(myFunction());
    
  
  })();
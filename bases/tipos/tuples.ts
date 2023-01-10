(() => {

    // const hero: [string, number] = ['Dr Strange', 100]; // tupla
    const hero: [string, number, boolean] = ['Dr Strange', 100, true]

    // hero[0] = 50; // error
    // hero[1] = 'Ironman'; // error

    hero[0] = 'Ironman'; // ok
    hero[1] = 50; // ok
    hero[2] = false; // ok
    
    


})();
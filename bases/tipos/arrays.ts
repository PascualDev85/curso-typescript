(() => {

    // const numbers: (string | number | boolean)[] = [1, 2, 3, 4, '5', 6, 7, 8, 9, 10];
     const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    numbers.push(11);

    console.log('numbers', numbers);

    const villians: string[] = ['Omega Rojo', 'Dormammu', 'Duende Verde'];
    villians.forEach(villian => {
        console.log(villian.toUpperCase());
    });
    console.log({villians});
    

    numbers.forEach(n => console.log(n));
    
    


})();
(() => {

    // Funciones en interfaces

    interface addTwoNumbers { 
        (a:number, b:number):number;
    }

    let sumarNums:addTwoNumbers = (a:number, b:number) => a + b;

    console.log(sumarNums(2, 3));


})()
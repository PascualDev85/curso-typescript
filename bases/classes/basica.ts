(() => {

    class Avenger {

        // private name: string = 'Scott Lang'; // private significa que solo se puede acceder a esta propiedad desde la clase
        // public team: string;
        // public realName?: string;
        static avgAge: number = 40; // static significa que la propiedad es de la clase y no del objeto

        constructor(
            private name: string,
            private team: string,
            public realName?: string,
            //? Esta parte comentada era un ejemplo ya que no vamos a modificar el valor de avgAge
            // avgAge: number = 35, // si es valor por defecto no es necesario ponerlo delante de realName que es opcional
            ) {
                // Avenger.avgAge = avgAge;
            }

    }

    const antman: Avenger = new Avenger('Antman', 'Cap', 'Scott Lang');
    console.log(antman);
    console.log(Avenger.avgAge); // static
    

})();
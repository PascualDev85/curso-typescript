(() => {

    class Avenger {

        // private name: string = 'Scott Lang'; // private significa que solo se puede acceder a esta propiedad desde la clase
        // public team: string;
        // public realName?: string;
        static avgAge: number = 40; // static significa que la propiedad es de la clase y no del objeto
        static getAvgAge(){ // método estático que no necesita instanciar la clase para poder usarlo
            return this.name; // sólo puedes acceder al name
        } 

        constructor(
            private name: string,
            private team: string,
            public realName?: string,
            //? Esta parte comentada era un ejemplo ya que no vamos a modificar el valor de avgAge
            // avgAge: number = 35, // si es valor por defecto no es necesario ponerlo delante de realName que es opcional
            ) {
                // Avenger.avgAge = avgAge;
            }

            public bio(): string { // método
                return `${this.name} ${this.team} ${this.realName}!!!`;
            }

    }

    const antman: Avenger = new Avenger('Antman', 'Cap', 'Scott Lang');
    console.log(antman);
    console.log(Avenger.avgAge); // static

    console.log(antman.bio());

    console.log(Avenger.getAvgAge()); // método estático
    
    


})();
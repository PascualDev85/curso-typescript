(() => {

    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ){
            console.log('Constructor Avenger llamado!');
        }

        protected getFullName(): string { // si lo ponemos como private no se puede acceder desde la clase hija o fuera de la clase
            return `${this.name} ${this.realName}`;
        }
    
    }

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutant: boolean,
        ){
            super(name, realName)
            console.log('Constructor Xmen llamado!');
            
        }

        get fullName(): string { // es como un método
            return `${this.name} - ${this.realName}`
        }

        set fullName( name: string ) { // recibe solo un parámetro. Se pueden llamar igual que el get porque son métodos distintos
            
            if (name.length <= 3) {
                throw new Error('El nombre debe tener más de 3 caracteres');
            }
            
            this.name = name;
        }

        getFullNameDesdeXmen(): void {
            console.log(super.getFullName());
            
        }
    }


    const wolverine = new Xmen('Wolverine', 'Logan', true);
    console.log(wolverine.fullName);
    // wolverine.getFullNameDesdeXmen();

    wolverine.fullName = 'David P.';
    console.log(wolverine.fullName);


    
    
})()
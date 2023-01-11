(() => {

    abstract class Mutant { // Clase abstracta, no se puede instanciar. Sirve para crear clases que sirvan de base para otras clases
        constructor(
            public name: string,
            public realName: string
        ) {}
    }

    class Xmen extends Mutant {
        salvarMundo() {
            console.log('El mundo está salvado!');
        }
    }

    class Villian extends Mutant {
        conquistarMundo() {
            console.log('El mundo está conquistado!');
        }
    }
        

    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villian('Magneto', 'Magnus')
    
    // console.log(wolverine.salvarMundo());
    // console.log(magneto.conquistarMundo());

   const printName = (character: Mutant) => {
       console.log(character.realName);
       
   }

    printName(wolverine);
    printName(magneto);

})();
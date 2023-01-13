function printToConsole(contructor:Function) {
    console.log(contructor);
}

const printToConsoleConditional = (print: boolean = false):Function => {
    
    if (print) {
        return printToConsole;
    } else {
        return () => {};
    }
    
}

const bloqueraPrototipo = function(constructor: Function) {
    Object.seal(constructor); // previene para hacer una expansión de una clase
    Object.seal(constructor.prototype);
}

function CheckValidPokemonId() { // factoryDecorator 
    return function(target: any, key: string, descriptor: PropertyDescriptor) { //descriptor sólo es cuando tengamos un método
        console.log({target, key, descriptor});
        
        const originalMethod = descriptor.value;
        
        descriptor.value = function(id: number) {
            if (id < 1 || id > 850) {
                throw new Error('El id del pokemon debe estar entre 1 y 850');
            } else {
                return originalMethod(id)
            }
        }
         
    }
}

function readonly( isWritable: boolean = true ):Function {
    return function(target: any, propertyKey: string ){
        
        const descriptor: PropertyDescriptor = {
             // hay que crear el objeto (descriptor)
            get() {
                console.log( this )
                return 'Fernando'
            },
            set( this, val ){
                // console.log(this, val )
                Object.defineProperty( this, propertyKey, {
                    value: val,
                    writable: !isWritable, // no lo quiero escribir(modificar)
                    enumerable: false
                })
            }
        }
        
        return descriptor;
    }
}




@bloqueraPrototipo
@printToConsoleConditional( true )
export class Pokemon {

    @readonly()
    public publicApi: string = 'http://pokeapi.co'

    constructor(
        public name: string,

    ){}
    
    @CheckValidPokemonId()
    savePokemon( id:number ) {
        console.log(`Guardando pokemon ${id} en la base de datos`);
    }




}
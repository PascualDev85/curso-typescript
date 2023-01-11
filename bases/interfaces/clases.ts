(() =>{

    interface Xmen {
        name: string;
        realName: string;
        mutanPower( id:number ):string;
    }

    interface Human {
        age: number;
    }

    class Mutant implements Xmen, Human {
        public name: string;
        public realName: string;
        public age: number;
       
        mutanPower( id:number ) {
            return `${this.name} tiene el poder de: ${this.realName}`;
        }
    }

})()
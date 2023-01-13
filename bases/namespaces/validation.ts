namespace Validations {

    // namespaces es un agrupador donde tengamos nuestra lógica y exportar lo que queramos.

   export const validateText = ( text: string): boolean => {
       
        return (text.length > 3) ? true : false;
    }

   export const validateDate = ( date: Date ): boolean => {
        return isNaN( date.valueOf() ) ? false : true;
    }

}

console.log(Validations.validateText('Davi'));
console.log(Validations.validateDate(new Date()));

"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (text) => {
        return (text.length > 3) ? true : false;
    };
    Validations.validateDate = (date) => {
        return isNaN(date.valueOf()) ? false : true;
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText('Davi'));
console.log(Validations.validateDate(new Date()));
//# sourceMappingURL=main.js.map
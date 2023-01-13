export const printObject = (argument:any):void => {
    console.log(argument);
}

// función genérica se utiliza <T>
export function genericFunction<T>(argument:T):T {
    return argument;
}

export const genericFunctionArror = <T>(argument:T):T => argument;
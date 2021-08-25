//Obtiene la diferencia de años
export function obtenerDiferenciaYear(year){
    return new Date().getFullYear() - year;
}

//Calcula el total a pagar segun la marca
export function calcularMarca(marca){
    let incremento;

    switch(marca){
        case 'chevrolet':
            incremento = 1.30;
            break;
        case 'citroen':
            incremento = 1.15;
            break;
         case 'fiat':
            incremento = 1.05;
            break;
        case 'ford':
            incremento = 1.40;
            break;
        case 'peugeot':
            incremento = 1.20;
            break;
        case 'renault':
            incremento = 1.10;
            break;
        case 'toyota':
            incremento = 1.25;
            break;
        case 'volkswagen':
            incremento = 1.35;
            break;   

        default:
            break;
    }

    return incremento;
}

//Calcula el tipo de seguro
export function obtenerPlan(plan){
    return(plan === 'basico') ? 1.20 : 1.60;
}

//Muestra la primer letra mayuscula
export function primerMayuscula(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}
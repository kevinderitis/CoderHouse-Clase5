import moment from 'moment';


let fecha1 = moment('2022-03-15'); 
let fecha2 = moment('1992-12-10');

console.log(fecha2.diff(fecha1, 'days'), ' dias de diferencia');

console.log(`Hoy es ${fecha1.format('L')}`)
console.log(`Naci el ${fecha2.format('L')}`)
console.log(`Desde mi nacimiento han pasado ${fecha1.diff(fecha2, 'days')} dias`)
console.log(`Desde mi nacimiento han pasado ${fecha1.diff(fecha2, 'years')} años`)

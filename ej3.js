import moment from 'moment';



let fecha1 = moment('1992-12-10');
let fecha2 = moment('2021-11-29');

console.log(fecha2.diff(fecha1, 'days'), ' dias de diferencia');

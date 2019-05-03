// Math Object
var random = Math.random() * 1000;
console.log(random);

console.log('round: ', Math.round(random)); // rounds to closest integer
console.log('floor: ', Math.floor(random)); // rounds down to closest integer
console.log('ceil: ', Math.ceil(random)); // rounds up to closest integer


var x = 10,
    y = 20;
console.log('max: ', Math.max(x, y)); // returns max value of the two variables
console.log('min: ', Math.min(x, y)); // returns min value of the two variables

var z = -300;
console.log('absolute: ', Math.abs(z)); // returns absolute value of the variable


var base = 2,
    power = 2;
console.log('power: ', Math.pow(base, power));
const score = 100;
// console.log(score)

const num = new Number(100)
// console.log(num)
// console.log(num.toString().length)
// console.log(num.toFixed(1))

const per = 123.567
// console.log(per.toPrecision(4))

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))

//+++++++++++++++++Maths+++++++++++++++++++++
// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.round(4.5))
// console.log(Math.ceil(4.5))
// console.log(Math.floor(4.8))
// console.log(Math.min(2,4,5,6))

console.log(Math.random()); /// it gives value from 0 to 1
console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()* (max - min + 1)) + min)

let name = "Anjali";
let className = "CSE5";
 
console.log(`Hlo,My name is ${name} and I am in class ${className}`);
const fillName = new String('Simran');
// console.log(fillName);

console.log(name.length)
console.log(name.toUpperCase())
console.log(name.indexOf('j'))
console.log(name.charAt(3))
console.log(name.substring(0,4))
const yourName = new String('sunny')
let newString = yourName.substring(2,3)
console.log(newString) 
const anotherString = yourName.slice(-4,3)
console.log(anotherString)


const yourSport = "    Badminton    "
// console.log(yourSport)
// console.log(yourSport.trim())

const url = "www.gmail%20log.com"
console.log(url.replace("%20", "-"))
console.log(url.includes("%20"))

console.log(name.split('a'))



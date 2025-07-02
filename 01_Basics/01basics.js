// "use strict";

// //alert(2+2); //  we are using node.js not browser
// //null : standalone value
// //symbol: uniqueness find krne ke liye
// //int 
// //string
// //undefined


// //object
// console.log(typeof null) //object
// console.log(typeof undefined) //undefined

// $$$$$$$$$$$$$$$$$$$conversion operation$$$$$$$$$$$$$$

let score = null

// console.log(typeof score)

let valueToNumber = Number(score)
// console.log(typeof valueToNumber)
// console.log(valueToNumber)

// "33" => 33
// "33abs" => NaN
// null => 0
// undefined => NaN
//true => 1


let number = undefined

let booleanNumber = Boolean(number)
// console.log(booleanNumber);

// 1 => true , 0 => false
// "anjali" => true , "" => false
// null and undefined => false


let num = 79
let stringNum = String(num)

// console.log(stringNum)


// $$$$$$$$$$$$$$$$$ operations $$$$$$$$$$$$$$$$$$$

let a = 6;
let b = a++;
// console.table([a,b])


////////////notes ////////////////
//Javascript is a dynamically typed language
//Primitive - call by value

// 7 types : String ,Number, Boolean, Null, undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')
// console.table([id,anotherId,id===anotherId])


//REFERENCE TYPE - NON Primitive
// Array, Objects, functions

const heros = ["Thor","IronMan","Hulk"];

let newObj = {
    name:"Anjali",
    rollNo: 23,  
}

const myFunction = function(){
    console.log("Hi, How are u?")
}



//+++++++++++++++++++++++++++++++++++++++++++++++++++
//Stack(Primitive) , Heap(Non- Primitive)

let marks = 25;

let updateMarks = marks;
updateMarks = 56;
console.log(marks);
console.log(updateMarks); 


let obj = {
    email: "anjali@22bmu.in",
}

let anotherObj = obj;
anotherObj.email = "Sunny@bmu.in"
console.log(obj.email)
console.log(anotherObj.email)
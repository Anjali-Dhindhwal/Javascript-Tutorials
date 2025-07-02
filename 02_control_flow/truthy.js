const email = []

// if(email){
//     console.log(`user is valid`)
// }else{
//     console.log(`user is invalid`)
// }

//falsy value

//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", "false", " ", [], {}, function(){}

//check whether array is empty
// if(email.length === 0){
//     console.log("array is empty")
// } 

//check whether object is empty

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
    // console.log(`object is empty`)
}


//Nullish Coalescing Operator(??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 10 ?? 15
console.log(val1)


//Ternary operator
//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("greater than 80");

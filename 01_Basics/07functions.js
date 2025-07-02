function sayMyName(){
    console.log('A')
    console.log('N')
    console.log('J')
    console.log('A')
    console.log('L')
    console.log('I')
}

// sayMyName();

// function addTwoNum(num1, num2){
//     console.log(num1+num2);
// }

function addTwoNum(num1, num2){
    // let result = num1+num2;
    // return result;

    return num1+num2;
 }

const result = addTwoNum(2,4);
// console.log("result: ", result)


function userLoggedInMessage(username){

    if(username === undefined){
        console.log("enter username") 
        return
    }
    return `${username} just logged in`
}

// console.log(userLoggedInMessage());

function calculateCartPrice(val1,val2,...num1){
    return num1
}

// console.log(calculateCartPrice(230,3445,234,345))

const user = {
    fullName : "Anjali",
    price : 123 
}

function handleObject(anyobject){
    console.log(`Fullname is ${anyobject.fullName} and price is ${anyobject.price}`);
}

// handleObject(user)
// handleObject({
//     fullName: "Manju Devi",
//     price: 999
// })


const myNewArray = [100,200,300,400,500];

function returnSecondValue(anyArray){
    return anyArray[1]
}

console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([100,200,300,400]))
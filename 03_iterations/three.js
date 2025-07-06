//for of

//["",""]
//[{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num)
}


const greetings = "Hi, sweety"
for (const greet of greetings) {
    // console.log(greet)
}

//Maps

const map = new Map()
map.set("IN", "India")
map.set("Fr" , "France")
map.set("EN", "England")
map.set("IN", "India")

// console.log(map)

for (const [key, value] of map) {
    // console.log(key," : " , value);
    
}



const myObj = {
    'game1' : 'Games Of Throne',
    'game2' : 'Spider-Man'
}

// for (const [key, value] of myObj) {           //not working => result: object is not iterable
//     console.log(key, " : " , value);
    
// }
const myObj = {
    js: "Javascript",
    cpp: "C++",
    py: "Python",
    sol: "Solidity"
}

for (const key in myObj) {
    // console.log(`${key} is for ${myObj[key]}`)
}

const array = [10,20,30,40,50]
for (const key in array) {
    // console.log(array[key]);
    
}

const map = new Map()
map.set("IN", "India")
map.set("Fr" , "France")
map.set("EN", "England")
map.set("IN", "India")

// for (const key in map) {                    //non -iterable
//     console.log(key);
    
// }


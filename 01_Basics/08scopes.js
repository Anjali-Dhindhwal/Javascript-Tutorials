var c = 300
let a = 100

if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log("innerscope: " , a)
}

// console.log(a);
// console.log(b);
// console.log(c);

// function one(){                // bache bado se icecream mang skte h pr bade bacho se nhi
//     const username = "Anjali";

//     function two(){
//         const website = "steam car washing";
//         console.log(username)
//     }
//     // console.log(website)

//     two()
// }
// one()

if(true){
    const username = "Anjali"
    if(username === "Anjali"){
         const website =" car wash"
        //  console.log(username)
        //  console.log(username + website)
    }
    // //console.log(website)
}
// //console.log(username)




//+++++++++++++++++interesting++++++++++++++++
console.log(addone(5))
function addone(num){
    return num+1
}
// console.log(addone(5))

// console.log(addtwo(6))
const addtwo = function(num){
    return num+2
}
// console.log(addtwo(6))
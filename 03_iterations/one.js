//For

for (let  i= 0; i < 10; i++) {            //ctrl+fn+F2 - sare i ko ek baar me select kr lega 
    const element = i;
    if(element == 9){
        // console.log("9 is my number")
    }
    // console.log(element)
    
}


for (let i = 0; i < 10; i++) {
    // console.log(`outer loop: ${i}`)
    for (let j = 0; j < 10; j++) {
        // console.log(`inner loop value ${j} and inner loop ${i}`)
        // console.log(` ${i} * ${j} = ${i*j} `)
        
    }
    
}


const myArray = ["Anjali", "Atul", "Sejal", "Simran"];
// console.log(myArray.length)
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element)
    
}


///+++++++++break and continue++++++++++++++
// for (let i = 0; i < 20; i++) {                 
//     if(i==9){
//         console.log("detected 9")
//         break;
//     }
//     console.log(`value of i : ${i}`)
    
// }

for (let i = 0; i < 20; i++) {   
    if(i==9){
        console.log("detected 9 ")
        continue;
    }
    console.log(`value of i : ${i}`)
    
}




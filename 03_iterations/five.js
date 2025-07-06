const coding = ["js", "css", "py", "sol"]

// coding.forEach(function(item){
//     console.log(item); 
// })

// coding.forEach((val) => {
//     console.log(val); 
// })


// function printMe (item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
    
// })


const myCoding = [
    {
        language: "javascript",
        languageFile: "js"
    },
    {
        language: "c++",
        languageFile: "cpp"
    },
    {
        language: "Python",
        languageFile: "py"
    }
]

myCoding.forEach( (item) =>{
    console.log(item.language);
    
})
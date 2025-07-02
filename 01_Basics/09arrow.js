const user = {
    username: "Anjali",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to website`)
        // console.log(this)
    }

}

// user.welcomeMessage()
// user.username = "Simran"
// user.welcomeMessage()

// console.log(this) // browser ka global object window object hai



function coffee(){                  /// we can not use this in functions                    
    const name = "tina"
    // console.log(this.name)
}
// coffee()


const tea = () => {
    const name  = "anjali"
    // console.log(this)
}
// tea()

// const two = (num1,num2) => {           //explicitly return
//     return num1+num2
// }
// const two = (num1,num2) =>  (num1+num2)        //implicitly return

const two = (num1,num2) =>  ({username: "anjali"})  //object return
console.log(two(2,4))  

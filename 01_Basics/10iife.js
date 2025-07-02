// Immediately Invoked Function Expressions(IIFE)

(function coffee(){               //named iife
    console.log("DB Connected")
}) ();               // use this ;  otherwise it give error

//()()         // global scope ke pollution se bachne ke lie iife ka use krte h

((name) =>{                                    //simple iife
    console.log(`db connected two ${name}`)
}) ("Sunny")

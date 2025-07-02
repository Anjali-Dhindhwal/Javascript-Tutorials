//Singleton
//object.create


//object literals
const mySym = Symbol("Key1");

const jsUser = {
    name : "Anjali",
    "full-name" : "Anjali Dhindhwal",
    [mySym] : "newkey",
    age : 22,
    email : "anjali.micro@.com",
    isLoggedIn : false,
    lastLoggedInDays : ['monday' , 'Wednesday']

}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full-name"])
// console.log(jsUser[mySym])
// console.log(jsUser)

// jsUser.email = "Sunny.micro@gmail.com"
// Object.freeze(jsUser)
// jsUser.email = "Simran.micro@gmail.com";
// console.log(jsUser)

// jsUser.greeting = function(){
//     console.log("hello everyone");

// }
// jsUser.greetingTwo = function(){
//     console.log(`hello everyone , ${this.name}`);

// }

// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());

////////////////////////////////////////////////////////////////////////////////////////////////////

// const list = new Object();
const list = {}

list.name = "Anjali"
list.id = 1234

// console.log(list)

const user = {

    email : "anjali@gmail.com",
    fullName : {
        userFullName : { 
            firstName : "Anjali",
            lastName :"Dhindhwal"
        }
    }
}

// console.log(user.fullName.userFullName.firstName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj5 = {};
// const obj4 = Object.assign(obj5, obj1,obj2, obj3)


// const obj4 = Object.assign({}, obj1,obj2, obj3)

const obj4 = {...obj1, ...obj2, ...obj3}
// console.log(obj4)
// console.log(obj4 === obj5 )


const users = [
    {
        id : 1,
        email : "anjali@bmu.in"
    
    },
    {
        id : 2,
        email : "anjali@bmu.in"
    
    },
    {
        id : 3,
        email : "anjali@bmu.in"
    
    },
]
users[1].email;
// console.log(users[1].email);

// console.log(user)
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

// console.log(user.hasOwnProperty('email'))

const course = {
    courseName : "web",
    fees : '999',
    courseInstructor : "Anjali"


}

//course.courseInstructor;
const {courseInstructor:instructor } = course
// console.log(courseInstructor)

console.log(instructor)











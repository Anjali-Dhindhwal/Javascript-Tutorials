const arr = [1,2,3,4,5]

const newArr = new Array(2,4,6)
// console.log(arr[2])
// console.log(newArr)

//array methods

// arr.push(9)
// arr.pop()

// arr.unshift(3)
// arr.shift()
// console.log(arr.includes(8))
// console.log(arr.indexOf(2))

// console.log(arr)/

//join
// const anotherArr = arr.join()
// console.log(arr)
// console.log(anotherArr)

//Slice, Splice
// const arr1 = arr.slice(1,3)
// console.log('A' , arr1)
// console.log('B' , arr)

// const arr2 = arr.splice(1,3)
// console.log('C' , arr2)
// console.log('D', arr)


///// more methods
const marvel_hero = ["Thor", "Spider-Man", "Iron-Man"];
const disney_princess = ["rupanzyl", "Snow-White","Moana"];

// marvel_hero.push(disney_princess);
// console.log(marvel_hero);

// const newHeroes = marvel_hero.concat(disney_princess);
// console.log(newHeroes);

const all_in_one_heroes = [...marvel_hero,...disney_princess]
// console.log(all_in_one_heroes)


// const anoArr = [1,2,3,[4,5],[6,7,[8,9]]];

// console.log(anoArr.flat(Infinity));

console.log(Array.isArray("Anjali"))
console.log(Array.from("Anjali"))
console.log(Array.from({name:"Anjali"})) // interesting and will learn later how to write 
//above give empty string

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));


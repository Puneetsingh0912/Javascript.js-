"use strict";// trea all js code as newer version
// alert(3+3)// we are using nodejs,not brower
console.log(3+3)
// data type
let name = "Puneet" // string
let age = 18 // number
let isLogged = false // boolean
// bigint
// null => stanadalone value
 let state;// undefined
 // symbol => unique

 
// object

console.log(typeof age);
/*console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2==1);
console.log(2 !=1);
*/

//console.log("2">1);
//console.log("02">1);


/*console.log(null >0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined >= 0);  

// === cheak data type and magnitude
console.log("2"===2);   */

// # Primitive data type

// 7 type : String, Number, Boolean, Null, Undefiend ,Symbol ,BigInt


const scoreNumber = 100
const scoreValue = 100.3

const isLogged = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 345678912349348329293n

// Reference {Non primitive}
// Array, Objects, Function

const heros = ["shaktiman", "naagraj", "doga"];
 let myobj = {
    name: "puneet",
    age: 23,
}

const myFunction = function(){
    console.log("hello world");
    
}

console.log( typeof  myFunction);

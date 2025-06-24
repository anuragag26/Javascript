/* *******
The way data is stored in the memory
and the way it is accessed from the 
memory , based on that the data is divided 
into two types ->
1. Primitive
2. Non-Primitive
********** */

// Primitive
// Call By Value
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 23432545453434343433424n   // bigInt


// Non-Primitive (Reference)
// Call By reference
//  Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"]

let myObj = {
    name: "Anurag",
    age: 20,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);

// All Non-primitve data type ka return type Object aata he but function ka
// (object function) aata he


// Javascript is Dynamically typed language means we don't have to define
// data type while declaring a variable

/*  Return type of variables in JavaScript

1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

*/

// +++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myname = "Anurag Agrawal"

let anothername = myname
anothername = "Bharat"

console.log(myname);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "anurag@google.com"

console.log(userOne.email);
console.log(userTwo.email);

//  Primitive Data type : Ye call by value hote hai
// 7 types : String,Number,Boolean,null,undefined,Symbol,BigInt

//Is JS a dyanmically typed language or statically typed language?
// JavaScript is a  dynamically typed language .In JavaScript, you don’t have to tell the type of a variable when you create it, and the type can change while the program is running.

const score =100 
const anotherscore = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; // undefined

const id = Symbol("123")
const anotherid = Symbol("123")
// console.log(id == anotherid);

const bigNumber = 32453252523453534n // last mai agar n lga dege toh automatically big int bn jaega

//Refernce type(Non primitive)
//Array,Objects,Functions


const heroes = ["Shaktiman", "Naagraj" , "Doga"] //array

let myObject = {  //Object => Key value pair
    name : "Saurav",
    age : 22,
}

// A function is also can stored in a variable
 const myFunction = function() { 
    console.log("Hello world");
 }

 console.log(typeof bigNumber);
 // IMPORTANT:null ka datatype object hota hai 
// Datatypes of non primitive types are function ,but  Function ka return hai jo ki usko obejct function bola jata hai

/*
Return type of variables in JavaScript
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
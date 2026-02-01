let score = "33abc";

console.log(typeof score);

let valueInNumber = Number(score); //convert to number
console.log(typeof valueInNumber);
console.log(valueInNumber);

// if we convert them into a number
// "33" => 33
//"33abc" => NaN
// "true" => 1 ; false => 0

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//  if we convert them into boolean
// 1 =>true ; 0 => false
// "" => false
// "saurav" => true

let someNumber = 2;

let someNumberString = String(someNumber);
console.log(someNumberString);
console.log(typeof someNumberString);

//******************************OPERTAIONS *************************************/

let value = 3;
let negValue = -value;
console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*3);
// console.log(2**3);
// console.log(4/2);
// console.log(4%2);

let str1 = "hello";
let str2 = " saurav";
let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log(((2 + 4) * 5) % 4);

console.log(true);

let gameCounter = 100
gameCounter++;
console.log(gameCounter);


let x = 3;
const y = x++;
console.log((`x:${x}, y:${y}`));

//Post-increment ka rule: x++
// Pehle value use hoti hai, baad mein increase hoti hai

//Pre-increment rule: ++x
//Pehle increase hota hai, phir value use hoti hai
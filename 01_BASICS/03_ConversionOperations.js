let score = "33abc"

console.log(typeof score);

let valueInNumber = Number(score); //convert to number
console.log(typeof valueInNumber);
console.log(valueInNumber)


// if we convert them into a number
// "33" => 33
//"33abc" => NaN
// "true" => 1 ; false => 0


let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//  if we convert them into boolean
// 1 =>true ; 0 => false
// "" => false 
// "saurav" => true

let someNumber = 2

let someNumberString = String(someNumber)
console.log(someNumberString);
console.log(typeof someNumberString);


/*let js = "amazing";
console.log(59 + 40 - 19);

console.log("Jonas");
console.log(23);

let firstName = "Soomin" // let variable = "value" 
console.log(firstName);

let myFirstJob = "Teacher";
let myCurrentJob = "Web Developeer";
let PI = 3.1415;

console.log(myFirstJob);

let javascriptIsFun = "YES";
console.log(typeof javascriptIsFun);
*/

///////////////////////////////////////////////
// [Declaring variables]
// 1. 'let' 
// : When you need to mutate a variable (=reassign a value to a variable).
// : Empty variable (O).
let age = 30;
age = 31;

// 2. 'const'
// : To declare variables that are not supposed to change at any point in the future.
// : Can't mutate a variable.
// : Empty variable (X) (Immutable)
//const birthYear = 2000;
// birthYear = 1990; // Error
// conts job; // Error. It needs to be initialised.

// *** BY DEFAULT -> Always use 'CONST', and change it to 'let' only when you are sure the variable needs to be changed. (Variable mutations might create bugs.)

// 3. 'var' - DO NOT USE. (old)
// : Looks similar to 'let' but different.


// [Operation]
// : Math operators (e.g. '-', '+', '*', '**', '/', 'typeof' etc)
// : Assignment operators (e.g. '=', '+=', '-=', '++' '--' etc)
// : Comparison operators (e.g. '>', '<', '>=', '<=' etc)

const now = 2037;
const ageSoo = now - 2000;
const ageKim = now - 1990;
console.log(ageSoo, ageKim);

console.log(ageSoo * 2, ageSoo / 10, 2 ** 3);
// 2 ** 3 = 2 to the power of 3.

const firstName = 'Soomin';
const lastName = 'Kim';
console.log(firstName + " " + lastName);

let x = 10 + 5; //15
x += 10; // x = x + 10 = 25
x++; // x = x + 1 = 26
x--; // x = x - 1 = 25
console.log(x);

console.log(ageSoo > ageKim);
console.log(ageKim >= 19);

const isFullAge = ageKim >= 18;

console.log(now - 2000 > now - 2022);


///////////////////////////////////////////////
// 15. Operator Precedence
// 'Right-to-left' assignment operator
let y, z;
y = z = 25 - 10 - 5;
console.log(y, z);

// Grouping operator
const avgAge = (ageSoo + ageKim) / 2;
console.log(ageSoo, ageKim, avgAge);


///////////////////////////////////////////////
// 17. Strings and Template Literals -> `(Backtick) with ${VARIABLE}
// Convinient, Cleaner.


// const firstName = 'Soo';
const birthYear = 2000;
const job = 'Web Developer';
const year = 2035;

const soo = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + "!";

console.log(soo);

//
const sooNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(sooNew);

console.log(`Back ticks...`)

console.log('String with \n multiple \n lines');

console.log(`String with
multiple
lines`)


// 18. Taking Decisions: if / else Statements
// eg.1
const yourAge = 15;

if (yourAge >= 18) {
    console.log('You can start driving license 🚗')
} else {
    const yearsLeft = 18 - yourAge;
    console.log(`You are too young. Wait another ${yearsLeft} years :) `)
}

// eg.2
const yourBirthYear = 2012;

let century;

if (yourBirthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);



///////////////////////////////////////////////
// 20. Type Conversion(Manual) and Coercion(Automatic)

//// type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number('Soo')); //NaN
console.log(typeof NaN); //number

console.log(String(23), 23); //String, Number

//// type coercion
console.log('I am ' + 23 + ' years old'); // Number -> String

//* '-' oper ator triggers the opposite converson *

console.log('23' - '10' - 3); //"13"-3 = 10
console.log('23' + '10' + 3); //23103
console.log(typeof ('23' + '10' - 3)); //2307, number
console.log('23' - '10' + 3); //16

console.log('23' * "2"); //46, Number

let n = '1' + 1; //"11"
n = n - 1; //"11" - 1 = 10
console.log(n);


///////////////////////////////////////////////
// 21. Truthy and Falsy Values

// '5 Falsy Values' : 0, '', undefined, null, NaN(Not a Number)

console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false 
console.log(Boolean("Soo")); //true
console.log(Boolean({})); //true
console.log(Boolean('')); //false

// const money = 0; // False
const money = 100; // True
if (money) {
    console.log("Don't spend it all.");
} else {
    console.log("You should get a job!");
}

// let height; // False
// let height = 0; // False
let height = 123; // True
if (height) {
    console.log("YAY! Height is defined.");
} else {
    console.log("Height is UNDEFINED.")
}



// 22. Equality Operators: == vs. ===
// "==" => Lose Equality Operator | Type Coercion 'O'
// "===" => Strict Equality Operator | Type Coercion 'X'
// *** As a general rule for clean code ***
// AVOID '==' AS MUCH AS YOU CAN. 
// ALWAYS USE '===' WHEN COMPARING VALUES.

const age2 = "18";
if (age2 === 18) console.log('You just became an adult. (Strict)');
if (age2 == 18) console.log('You just became an adult. (Loose)');

console.log(18 === 18) //true 
console.log("18" === 18) //false 
console.log("18" == 18) //true 
console.log("18" == 19) //true 

// const favourite = prompt("What's your favourite number?");
// console.group(favourite);
// console.group(typeof (favourite)); // String

// if (Number(favourite) == 23) { // '23' == 23 => True
//     console.log("23 is an amazing number!");
// }

// if (Number(favourite) === 23) { // '23' === 23 => False
//     console.log("23 is an amazing number!");
// } else if (Number(favourite) === 7) {
//     console.log("7 is an amazing number!");
// } else {
//     console.log("Number is not 23 or 7.");
// };

// if (Number(favourite) !== 23) console.log('Why not 23?');



// 23. Boolean Logic
// AND => True = When ALL are true
// OR => True = When ONE is true
// NOT => Inverts true/false value

const age3 = 16;
// A: Age is greater or equal 20 => False
// B: Age is less than 30 => True

// !A = True
// A AND B => False
// A OR B => True
// !A AND B => True
// A or !B => False




// 24. Logical Operators

const hasDriversLicense = true; // A
const hasGoodVision = false; // B

console.log(hasDriversLicense && hasGoodVision); //false
console.log(hasDriversLicense || hasGoodVision); //true
console.log(!hasDriversLicense); //false

if (hasDriversLicense && hasGoodVision) {
    console.log("She is able to drive!");
} else {
    console.log("Someome else should drive..");
};

const isTired = true // C
console.log(hasDriversLicense && hasGoodVision && !isTired);
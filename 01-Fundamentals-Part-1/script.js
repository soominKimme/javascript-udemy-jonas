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
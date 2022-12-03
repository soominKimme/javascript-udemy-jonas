// Coding Challenge #1

// const heightOfMark = 1.69;
// const massOfMark = 78;
// const heightOfJohn = 1.95;
// const massOfJohn = 92;

const heightOfMark = 1.88;
const massOfMark = 95;
const heightOfJohn = 1.76;
const massOfJohn = 85;

const BMIOfMark = massOfMark / heightOfMark ** 2;
const BMIOfJohn = massOfJohn / heightOfJohn ** 2;

const markHigherBMI = BMIOfMark > BMIOfJohn; //Boolean variable

console.log(BMIOfMark, BMIOfJohn, 'markHigherBMI = ' + markHigherBMI);


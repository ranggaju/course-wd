console.log('------------------------------');
console.log('                              ');
console.log('       Exercise Day 02        ');
console.log('                              ');
console.log('------------------------------');

// Write a code to check whether the number is odd or even

let numA = 25;

if (numA % 2 == 0) {
  console.log('the number ' + numA + ' is an even number');
} else {
  console.log('the number ' + numA + ' is an odd number');
}
console.log('------------------------------');

// Write a code to check whether the number is prime number or not

let numB = 7;
let prmChk;

for (let i = 2; i < numB; i++) {
  if (numB % i == 0) {
    prmChk = 'composite';
    break;
  }
  prmChk = 'prime';
}

console.log('the number ' + numB + ' is an ' + prmChk + ' number');
console.log('------------------------------');

// Write a code to find the sum of the numbers 1 to N

let numC = 5;
let numSig, strSig;

for (let i = 1; i <= numC; i++) {
  if (i == 1) {
    numSig = i;
    strSig = i;
  } else {
    numSig = numSig += i;
    strSig = strSig + ' + ' + i;
  }
}

console.log('Σ' + numC + ' = ' + strSig + ' = ' + numSig);
console.log('------------------------------');

// Write a code to find factorial of a number

let numD = 6;
let numFac, strFac;

for (let i = 1; i <= numD; i++) {
  if (i == 1) {
    numFac = i;
    strFac = i;
  } else {
    numFac = numFac *= i;
    strFac = strFac + ' x ' + i;
  }
}

console.log(numD + '! = ' + strFac + ' = ' + numFac);
console.log('------------------------------');

// Write a code to print the first N fibonacci numbers

let numE = 15;
let numFibTmp, numFibA, numFibB;

for (let i = 1; i <= numE; i++) {
  if (i == 1) {
    numFibTmp = 0;
    numFibA = 1;
  } else {
    numFibTmp = numFibA;
    numFibA = numFibB;
  }
  numFibB = numFibTmp + numFibA;
}

console.log('the first ' + numE + ' fibonacci numbers is ' + numFibA);
console.log('------------------------------');

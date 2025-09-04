function h1(string) {
  const pad = ' '.repeat(Math.floor((30 - ('' + string).length) / 2));
  const line = '='.repeat(30);
  return console.log(`${line}\n\n${pad}${string}\n\n${line}`);
}

function h2(string) {
  const pad = ' '.repeat(Math.floor((30 - ('' + string).length) / 2));
  const line = '-'.repeat(30);
  return console.log(`\n${pad}${string}\n\n${line}`);
}

function line1() {
  console.log('='.repeat(30));
}

function line2() {
  console.log('-'.repeat(30));
}

h1('Exercise Day 05');
h2('First Page');

// Write a function to get the lowest, highest and average value in the array (with and without sort function)

function lha(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  const avr = Math.round((sum / arr.length) * 10000) / 10000;
  return `lowest: ${min}, highest: ${max}, average: ${avr}`;
}

console.log(lha(12, 5, 23, 18, 4, 45, 32));

line2();

// Write a function that takes an array of words and returns a string by concatenating the words in the array separated by commas and - the last word - by an 'and'

function join(...arr) {
  arr[arr.length - 1] = `and ${arr[arr.length - 1]}`;
  return arr.join(', ');
}

console.log(join('apple', 'banana', 'cherry', 'date'));

line2();

// Write a function from a given array of numbers and return the second smallest number

// Mark 01
function sml2Num(...arr) {
  return arr.sort()[1];
}

console.log(sml2Num(5, 3, 1, 7, 2, 6));

// Mark 02

function sml2NumMk2(...arr) {
  const dup = [];
  for (let i = 1; i < arr.length; i++) {
    let tmp = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] < arr[j - 1]) {
        tmp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (dup.includes(arr[i])) continue;
    dup.push(arr[i]);
  }
  return dup[1];
}

console.log(sml2NumMk2(5, 3, 1, 7, 2, 6, 1));

line2();

// Write a function to calculate each element in the same position from two arrays of integer

function add2Arr(arrA, arrB) {
  const res = [];
  for (let i = 0; i < arrA.length; i++) {
    res.push(arrA[i] + arrB[i]);
  }
  return res;
}

console.log(add2Arr([1, 2, 3], [3, 2, 1]));

line2();

h2('Second Page');

h2('Third Page');

// Based on the array below write a function that will return primitive data types only

// Write a function from the below array of number that will return sum of duplicate values

function sumDup(...arr) {
  let sum = 0;
  const dup = [];
  for (let i = 0; i < arr.length; i++) {
    if (dup.includes(arr[i])) continue;
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        count++;
      }
    }
    if (count > 1) {
      sum += arr[i] * count;
      dup.push(arr[i]);
    }
  }
  return sum;
}

console.log(sumDup(10, 20, 40, 10, 50, 30, 10, 60, 10));
line2();

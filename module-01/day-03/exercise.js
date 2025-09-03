console.log('------------------------------');
console.log('                              ');
console.log('       Exercise Day 03        ');
console.log('                              ');
console.log('------------------------------');

// Write a code to display the multiplication table of a given integer

let numA = 9;
let numLim = 10;
let numLen = numLim.toString().length;
let numMulLen = (numA * numLim).toString().length;

for (let i = 1; i <= numLim; i++) {
  let strMul = i.toString().padStart(numLen, ' ');
  let strRes = (numA * i).toString().padStart(numMulLen, ' ');
  console.log(`${numA} x ${strMul} = ${strRes}`);
}
console.log('------------------------------');

// Write a code to check whether a string is a palindrome or not

let strA = 'madam';
let strARev = strA.split('').reverse().join('');

strA == strARev
  ? console.log(`${strA} is a palindrome`)
  : console.log(`${strA} is not a palindrom`);
console.log('------------------------------');

// Write a code to convert centimeter to kilometer

let numUnt = 100000.2;

const nKilo = Math.round((numUnt / 100000) * 100) / 100;

console.log(`${numUnt} cm = ${nKilo} km`);
console.log('------------------------------');

// Write a code to format number as currency (IDR)

let numCur = 123456.002;

function curFrmt(number) {
  let num = Math.floor(number);
  let dcm = Math.round((number - num) * 100);

  return `Rp${num.toLocaleString('id-ID')},${dcm.toString().padStart(2, 0)}`;
}

console.log(curFrmt(numCur));
console.log('------------------------------');

// Write a code to remove the first occurrence of a given “search string” from a string

let strB = 'Hello world, hello universe';
let strBSrch = 'ell';

function rmvFrst(string, search) {
  string.indexOf(search) != -1
    ? (string =
        string.slice(0, string.indexOf(search)) +
        string.slice(string.indexOf(search) + search.length))
    : (string = string);
  return string;
}

console.log(rmvFrst(strB, strBSrch));
console.log('------------------------------');

// Write a code to capitalize the first letter of each word in a string

let strC = 'hello world, hello universe';

function cptlFrst(string) {
  let arrStc = string.split(' ');
  for (let i = 0; i < arrStc.length; i++) {
    arrStc[i] = arrStc[i].charAt(0).toUpperCase() + arrStc[i].slice(1);
  }
  return arrStc.join(' ');
}

console.log(cptlFrst(strC));
console.log('------------------------------');

// Write a code to swap the case of each character from string

let strD = 'The QuiCk BrOwN Fox';

function swpCs(string) {
  let swap = '';
  for (let i = 0; i < string.length; i++) {
    let char = string.charAt(i);
    char == char.toUpperCase()
      ? (swap += char.toLowerCase())
      : (swap += char.toUpperCase());
  }
  return swap;
}

console.log(swpCs(strD));
console.log('------------------------------');

// Write a code to find the largest of two given integers

let numF = 42;
let numG = 27;
let numH = 18;

function max(...array) {
  let numMax = array[0];
  for (let i = 1; i < array.length; i++) {
    array[i] > numMax ? (numMax = array[i]) : (numMax = numMax);
  }
  return numMax;
}

console.log(`the max value is ${max(numF, numG, numH)}`);
console.log('------------------------------');

// Write a conditional statement to sort three numbers

function sortNumbers(...array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array.join(', ');
}

console.log(sortNumbers(numF, numG, numH));
console.log('------------------------------');

// Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type

let valInp = 'true';

function chkTyp(anyVal) {
  let type = (typeof valInp == 'string') * 1 + (typeof valInp == 'number') * 2;
  type += (type == 0) * 3;
  return type;
}

console.log(`type: ${chkTyp(valInp)}`);
console.log('------------------------------');

// Write a code to change every letter a into * from a string of input

let strInp = 'An apple a day keeps the doctor away';
let strHd = 'a';

function hdChr(string, hide) {
  let arrStc = string.split('');
  for (let i = 0; i < arrStc.length; i++) {
    if (arrStc[i].toLowerCase() == hide.toLowerCase()) {
      arrStc[i] = '*';
    }
  }
  return arrStc.join('');
}

console.log(hdChr(strInp, strHd));
console.log('------------------------------');

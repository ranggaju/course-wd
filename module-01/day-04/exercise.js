console.log('------------------------------');
console.log('                              ');
console.log('       Exercise Day 04        ');
console.log('                              ');
console.log('------------------------------');

// Create a function that can create a triangle pattern according to the height we provide

function crtTrngl(height) {
  let tri = '';
  let cnt = 1;
  const numLen = ((height * (height + 1)) / 2).toString().length;
  for (let i = 1; i <= height; i++) {
    for (let j = 1; j <= i; j++) {
      tri += `${cnt.toString().padStart(numLen, 0)}${(j == 1 && '') || ' '}`;
      cnt++;
    }
    tri += i === height ? '' : '\n';
  }
  return tri;
}

console.log(crtTrngl(4));
console.log('------------------------------');

// Create a function that can loop the number of times according to the input we provide, and will replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with "FizzBuzz".

function fizzBuzz(n) {
  const arrFB = [];
  for (let i = 1; i <= n; i++) {
    let valFB = '';
    valFB = `${(i % 3 == 0 && 'Fizz') || ''}${(i % 5 == 0 && 'Buzz') || ''}`;
    valFB = (valFB == '' && i) || valFB;
    arrFB.push(valFB);
  }
  return `${n} -> ${arrFB.join(', ')}`;
}

console.log(fizzBuzz(15));
console.log('------------------------------');

// Create a function to calculate Body Mass Index (BMI)

function calBMI(weight, height) {
  const bmi = weight / height ** 2;
  let cat = '';
  if (bmi < 18.5) {
    cat = 'less weight';
  } else if (18.5 <= bmi < 25) {
    cat = 'ideal';
  } else if (25 <= bmi < 30) {
    cat = 'overweight';
  } else if (30 <= bmi < 40) {
    cat = 'very overweight';
  } else {
    cat = 'obesity';
  }
  return `${bmi.toFixed(1)} (${cat})`;
}

console.log(calBMI(58, 1.53));
console.log('------------------------------');

// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only

function even(...arr) {
  let arrEven = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      arrEven.push(arr[i]);
    }
  }
  return arrEven;
}

console.log(even(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log('------------------------------');

// Write a function to split a string and convert it into an array of words

function split(string) {
  arrStr = string.split(' ');
  return arrStr;
}

console.log(split('Hello World'));
console.log('------------------------------');

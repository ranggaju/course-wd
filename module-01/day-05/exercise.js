const linerLen = 50;
const liner = (char = '') => char.repeat(linerLen);
const padding = (text = '') => ' '.repeat(Math.floor((linerLen - text.length) / 2));

const hd = (text, level = 1) => {
  const header = `- ${text} -`;
  const pad = padding(header);
  const border = level == 1 ? '=' : '-';
  const top = level == 1 ? `${liner(border)}\n\n` : '';
  const bot = level == 1 ? `\n\n${liner(border)}` : level == 2 ? `\n${liner(border)}` : '';

  console.log(`${top}${pad}${header}${bot}`);
};

const bl = (char) => console.log(liner(char));

hd('Exercise Day 05');
hd('First Page', 2);

hd('01', 3);

// Write a function to get the lowest, highest and average value in the array (with and without sort function)

const minMaxAvr = (...numbers) => {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  const sum = numbers.reduce((acc, n) => acc + n, 0);
  const average = Math.round((sum / numbers.length) * 10000) / 10000;

  return `lowest: ${min}, highest: ${max}, average: ${average}`;
};

console.log(minMaxAvr(12, 5, 23, 18, 4, 45, 32));

hd('02', 3);

// Write a function that takes an array of words and returns a string by concatenating the words in the array separated by commas and - the last word - by an 'and'

const concatArr = (...array) => {
  array[array.length - 1] = `and ${array[array.length - 1]}`;

  return array.join(', ');
};

console.log(concatArr('apple', 'banana', 'cherry', 'date'));

hd('03', 3);

// Write a function from a given array of numbers and return the second smallest number

const secondSmallest = (...array) => array.sort()[1];

console.log(secondSmallest(5, 3, 1, 7, 2, 6));

hd('04', 3);

// Write a function to calculate each element in the same position from two arrays of integer

const addArr = (arrayA = [], arrayB = []) => arrayA.map((num, i) => num + arrayB[i]);

console.log(addArr([1, 2, 3], [3, 2, 1]));

hd('05', 3);

// Write a function that adds an element to the end of an array. However, the element should only be added if it is not already in the array

const addElement = (element, ...array) => (array.includes(element) ? array : [...array, element]);

console.log(addElement(4, 1, 2, 3, 4));
console.log(addElement(7, 1, 2, 3, 4));

bl('=');
hd('Second Page', 2);

hd('01', 3);

// Write a function from a given array of mixed data types and return the sum of all the number

const sumOfNumber = (...array) => {
  let add = 0;

  for (let i = 0; i < array.length; i++) {
    typeof array[i] === 'number' && (add += array[i]);
  }

  return add;
};

console.log(sumOfNumber('3', 1, 'string', null, false, undefined, 2));

hd('02', 3);

// Write a function to insert multiple given integer (not an array) to an array and have a maximum size input. The array can only have a maximum size from a given input

const maxSize = (number, ...array) => {
  const len = number < array.length ? number : array.length;
  const max = [];

  for (let i = 0; i < len; i++) {
    max.push(array[i]);
  }

  return max;
};

console.log(maxSize(5, 5, 10, 24, 3, 6, 7, 8));

hd('03', 3);

// Write a function that will combine 2 given array into one array

const combineArray = (arrayA, arrayB) => [...arrayA, ...arrayB];

console.log(combineArray([1, 2, 3], [4, 5, 6]));

hd('04', 3);

// Write a function to find duplicate values in an array

const findDup = (...array) => {
  const temp = [];
  const res = [];

  for (let i of array) {
    temp.includes(i) && !res.includes(i) && res.push(i);
    !temp.includes(i) && temp.push(i);
  }
  return res;
};

console.log(findDup(1, 2, 2, 2, 3, 3, 4, 5, 5));

hd('05', 3);

// Write a function to find the difference in 2 given array

const findDiff = (arrayA, arrayB) => {
  const res = [];
  for (let i of arrayA) {
    !arrayB.includes(i) && !res.includes(i) && res.push(i);
  }
  for (let i of arrayB) {
    !arrayA.includes(i) && !res.includes(i) && res.push(i);
  }
  return res;
};

console.log(findDiff([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

bl('=');

hd('Third Page', 2);
hd('01', 3);

// Based on the array below write a function that will return primitive data types only

const primitiveOnly = (...array) => {
  const res = [];
  for (let n of array) {
    typeof n != 'object' && res.push(n);
  }
  return res;
};

console.log(primitiveOnly(1, [], undefined, {}, 'string', {}, []));

hd('02', 3);

// Write a function from the below array of number that will return sum of duplicate values

const sumDup = (...array) => {
  const temp = [];
  const dup = [];
  let res = 0;

  for (let i of array) {
    temp.includes(i) && !dup.includes(i) && dup.push(i);
    !temp.includes(i) && temp.push(i);
  }

  for (let i of array) {
    dup.includes(i) && (res += i);
  }

  return res;
};

console.log(sumDup(10, 20, 40, 10, 50, 30, 10, 60, 10));

hd('03', 3);

// Write a game of rock, paper, scissor function that will return 'Win' or 'Lose'

const rockPaperScissor = (player = '') => {
  player = player.toLowerCase();

  const option = ['rock', 'paper', 'scissor'];
  const comp = option[Math.floor(Math.random() * option.length)];

  if (!option.includes(player)) {
    return `choose: ${option.slice(0, -1).join(', ')} or ${option.slice(-1)}`;
  }

  let message = `you throw ${player}, computer throw ${comp}, you `;

  message +=
    player === comp
      ? 'draw'
      : (player === option[0] && comp === option[2]) ||
        (player === option[1] && comp === option[0]) ||
        (player === option[2] && comp === option[1])
      ? 'win'
      : 'lose';

  return message;
};

console.log(rockPaperScissor('rock'));

bl('=');

const linerLen = 50;
const liner = (char: string): string => char.repeat(linerLen);

const hd = (text: string, level: number): void => {
  const header = `- ${text} -`;
  const pad = ' '.repeat(Math.floor((linerLen - text.length) / 2));
  const border = level === 1 ? '=' : '-';
  const top = level === 1 ? `${liner(border)}\n\n` : '';
  const bot = level === 1 ? `\n\n${liner(border)}` : level === 2 ? `\n${liner(border)}` : '';

  console.log(`${top}${pad}${header}${bot}`);
};

const bl = (char: string): void => console.log(liner(char));

hd(`Exercise Day 03`, 1);

hd('01', 3);

// Write a code to display the multiplication table of a given integer

const multiplicationTable = (number: number): string => {
  const padLen = (10 * number).toString().length;
  const pad = (value: number): string => value.toString().padStart(padLen, ' ');

  return Array.from({ length: 10 }, (_, i) => {
    const val = i + 1;
    return `${number} x ${pad(val)} = ${pad(val * number)}`;
  }).join('\n');
};

console.log(multiplicationTable(9));

hd('02', 3);

// Write a code to check whether a string is a palindrome or not

const checkPalindrome = (text: string): string => {
  const lower = text.toLowerCase();
  const reversed = [...text].reverse().join('');
  const isPal = lower === reversed;

  return `${text} is${isPal ? ' ' : ' not '}a palindrome`;
};

console.log(checkPalindrome('madam'));

console.log(checkPalindrome('madam'));

hd('03', 3);

// Write a code to convert centimeter to kilometer

const cmToKm = (number: number): string => `${Math.round((number / 100000) * 100) / 100} km`;

console.log(cmToKm(100000));

hd('04', 3);

// Write a code to format number as currency (IDR)

const numberToIDR = (number: number): string =>
  `${number.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}`;

console.log(numberToIDR(1000));

hd('05', 3);

// Write a code to remove the first occurrence of a given “search string” from a string

const removeFirstOccurence = (text: string, remove: string): string => {
  const i = text.indexOf(remove);

  return i === -1 ? text : text.slice(0, i) + text.slice(i + remove.length);
};

console.log(removeFirstOccurence('Hello world', 'ell'));

hd('06', 3);

// Write a code to capitalize the first letter of each word in a string

const properCase = (text: string): string =>
  text
    .split(' ')
    .map((val) => val.charAt(0).toUpperCase() + val.slice(1).toLocaleLowerCase())
    .join(' ');

console.log(properCase('hello world, hello universe'));

hd('07', 3);

// Write a code to swap the case of each character from string

const swapCase = (text: string): string =>
  [...text].map((val) => (val === val.toUpperCase() ? val.toLocaleLowerCase() : val.toUpperCase())).join('');

console.log(swapCase('The QuiCk BrOwN Fox'));

hd('08', 3);

// Write a code to find the largest of two given integers

const largestNumber = (...nums: number[]): number => Math.max(...nums);

console.log(largestNumber(42, 27));

hd('09', 3);

// Write a conditional statement to sort three numbers

const sortNumbers = (...nums: number[]): number[] => nums.sort((a, b) => a - b);

console.log(sortNumbers(18, 27, 42));

hd('10', 3);

// Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type

const checkType = (value: unknown): number => {
  const typeMap: { [key: string]: number } = {
    string: 1,
    number: 2,
  };

  return typeMap[typeof value] ?? 3;
};

console.log(checkType('hello'));

hd('11', 3);

// Write a code to change every letter a into * from a string of input

const hideChar = (text: string, char: string): string =>
  [...text].map((val) => (val.toLowerCase() === char ? '*' : val.toLowerCase())).join('');

console.log(hideChar('An apple a day keeps the doctor away', 'a'));

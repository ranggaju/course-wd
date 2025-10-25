const linerLen = 50;
const liner = (char: string) => char.repeat(linerLen);

const hd = (text: string, level: number): void => {
  const header = `- ${text} -`;
  const pad = ' '.repeat(Math.floor((linerLen - text.length) / 2));
  const border = level === 1 ? '=' : '-';
  const top = level === 1 ? `${liner(border)}\n\n` : '';
  const bot = level === 1 ? `\n\n${liner(border)}` : level === 2 ? `\n${liner(border)}` : '';

  console.log(`${top}${pad}${header}${bot}`);
};

const bl = (char: string): void => console.log(liner(char));

hd('Exercise Day 02', 1);

hd('01', 3);

// Write a code to check whether the number is odd or even

const isOddEven = (number: number) => `${number} ${number % 2 === 0 ? ' is an even number' : ' is an odd number'}`;

console.log(isOddEven(25));

hd('02', 3);

// Write a code to check whether the number is prime number or not

const isPrime = (number: number): string => {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return `${number} is not a prime number`;
    }
  }
  return `${number} is a prime number`;
};

console.log(isPrime(7));
console.log(isPrime(6));

hd('03', 3);

// Write a code to find the sum of the numbers 1 to N

const sigmaOfNumber = (number): string => {
  const nums = Array.from({ length: number }, (_, i) => i + 1);
  const sum = nums.reduce((acc, cur) => acc + cur, 0);
  return `${nums.join(' + ')} = ${sum}`;
};

console.log(sigmaOfNumber(5));
console.log(sigmaOfNumber(3));

hd('04', 3);

// Write a code to find factorial of a number

const factorialOfNumber = (number: number): string => {
  const nums = Array.from({ length: number }, (_, i) => i + 1);
  const fac = nums.reduce((acc, cur) => acc * cur, 1);
  return `${nums.join(' x ')} = ${fac}`;
};

console.log(factorialOfNumber(4));
console.log(factorialOfNumber(6));

hd('05', 3);

// Write a code to print the first N fibonacci numbers

const fibonacci = (number: number): string => {
  const fib = [1, 1];
  for (let i = 2; i < number; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return `F(${number}) = ${fib[number - 1]}`;
};

console.log(fibonacci(15));

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

hd('Exercise Day 09', 1);

hd('01', 3);

// Create a function to convert Excel sheet column title to its corresponding column number

const columnToNumber = (column: string): number => {
  column = column.toUpperCase();
  let result: number = 0;
  let power: number = 1;

  for (let i = column.length - 1; i >= 0; i--) {
    const char = column[i];
    const value = char.charCodeAt(0) - 'A'.charCodeAt(0) + 1;

    result += value * power;

    power *= 26;
  }

  return result;
};

console.log(columnToNumber('AB'));

hd('02', 3);

// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one

const singleNumber = (numbers: number[]): number => {
  let result: number = 0;

  for (let number of numbers) {
    result ^= number;
    console.log(result);
  }

  return result;
};

const nums = [4, 1, 2, 1, 2];

console.log(singleNumber(nums));

const bin = nums.map((val) => val.toString(2));

console.log(bin);

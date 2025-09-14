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

hd('Exercise Day 07', 1);

hd('01', 3);

// Create a function to merge two array of student data and remove duplicate data

interface StudentData {
  name: string;
  email: string;
}

const mergeStudent = (...students: StudentData[][]): StudentData[] => {
  const merge = students.flat();

  return [...new Map(merge.map((val) => [val.name, val])).values()];
};

console.log(
  mergeStudent(
    [
      { name: 'Student 1', email: 'student1@mail.com' },
      { name: 'Student 2', email: 'student2@mail.com' },
    ],
    [
      { name: 'Student 1', email: 'student1@mail.com' },
      { name: 'Student 3', email: 'student3@mail.com' },
    ]
  )
);

hd('02', 3);

// Create a function that can accept input as an array of objects and switch all values into property and property into value

const switchKeyValue = (object: { [key: string]: any }[]): { [key: string]: any }[] => {
  return object.map((obj) => {
    const swap: { [key: string]: any } = {};

    Object.entries(obj).forEach(([key, val]) => {
      swap[val] = key;
    });

    return swap;
  });
};

console.log(switchKeyValue([{ name: 'David', age: 20 }]));

hd('03', 3);

// Create a function to find a factorial number using recursion

const factorial = (number: number): string => {
  if (number === 0) return `0! = 1`;

  const step = (x: number): [string, number] => {
    if (x === 1) return ['1', 1];

    const [stepStr, stepVal] = step(x - 1);

    return [`${x} x ${stepStr}`, x * stepVal];
  };

  const [steps, result] = step(number);

  return `${number}! = ${steps} = ${result}`;
};

console.log(factorial(5));

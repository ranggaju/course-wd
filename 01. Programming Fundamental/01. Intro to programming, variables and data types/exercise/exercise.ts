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

const bl = (char: string) => console.log(liner(char));

hd('Exercise Day 01', 1);
hd('01', 3);

// Write a code to find area of rectangle

const rectangleArea = (length: number, width: number): number => length * width;

console.log(rectangleArea(5, 3));

hd('02', 3);

// Write a code to find perimeter of rectangle

const rectanglePerimeter = (length: number, width: number): number => 2 * (length + width);

console.log(rectanglePerimeter(5, 3));

hd('03', 3);

// Write a code to find diameter, circumference and area of a circle

const circleDiameter = (radius: number): number => 2 * radius;
const circleCircumference = (radius: number): number => Math.round(2 * Math.PI * radius * 100) / 100;
const circleArea = (radius: number): number => Math.round(Math.PI * radius ** 2 * 100) / 100;

const circleElements = (radius: number) => ({
  circle: {
    diameter: circleDiameter(radius),
    circumference: circleCircumference(radius),
    area: circleArea(radius),
  },
});

console.log(circleElements(5));

hd('04', 3);

// Write a code to find angles of triangle if two angles are given

const triangleThirdAngle = (angleA: number, angleB: number): number => 180 - (angleA + angleB);

console.log(triangleThirdAngle(80, 65));

hd('05', 3);

// Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days)

const daysToYMD = (days: number) => ({
  year: Math.floor(days / 365),
  month: Math.floor((days % 365) / 30),
  day: (days % 365) % 30,
});

console.log(daysToYMD(400));
console.log(daysToYMD(366));

hd('06', 3);

// Write a code to get difference between dates in days

const datesDifference = (dateA: string | Date, dateB: string | Date): number =>
  Math.abs(new Date(dateA).getDay() - new Date(dateB).getDay());

console.log(datesDifference('2022-01-20', '2022-01-22'));

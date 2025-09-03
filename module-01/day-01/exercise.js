console.log('------------------------------');
console.log('                              ');
console.log('       Exercise Day 01        ');
console.log('                              ');
console.log('------------------------------');

// Write a code to find area of rectangle

let rectALen = 5;
let rectAWid = 3;

const rectArea = rectALen * rectAWid;

console.log('rectangle a length   : ' + rectALen + ' unit');
console.log('rectangle a width    : ' + rectAWid + ' unit');
console.log('rectangle a area     : ' + rectArea + ' square unit');
console.log('------------------------------');

// Write a code to find perimeter of rectangle

let rectBLen = 5;
let rectBWid = 3;

const rectBPerim = 2 * (rectBLen + rectBWid);

console.log('rectangle b length   : ' + rectBLen + ' unit');
console.log('rectangle b width    : ' + rectBWid + ' unit');
console.log('rectangle b perimeter: ' + rectBPerim + ' unit');
console.log('------------------------------');

// Write a code to find diameter, circumference and area of a circle

let cirRad = 5;

const diCir = 2 * cirRad;
const cirCirc = parseFloat((2 * Math.PI * cirRad).toFixed(4));
const cirArea = parseFloat(Math.trunc(Math.PI * cirRad ** 2 * 1000) / 1000);

console.log('circle radius        : ' + cirRad + ' unit');
console.log('circle diameter      : ' + diCir + ' unit');
console.log('circle circumference : ' + cirCirc + ' unit');
console.log('circle area          : ' + cirArea + ' unit persegi');
console.log('------------------------------');

// Write a code to find angles of triangle if two angles are given

let trglAngA = 80;
let trglAngB = 65;

const trglAngC = 180 - (trglAngA + trglAngB);

console.log('triangle angle a     : ' + trglAngA + ' degree');
console.log('triangle angle b     : ' + trglAngB + ' degree');
console.log('triangle angle c     : ' + trglAngC + ' degree');
console.log('------------------------------');

// Write a code to convert days to years, months and days (Notes: 1 year : 365 days, 1 month : 30 days)

let daysNum = 400;

const yrNum = Math.floor(daysNum / 365);
const moNum = Math.floor((daysNum % 365) / 30);
const dayNum = (daysNum % 365) % 30;

console.log(
  daysNum +
    ' day/s            : ' +
    yrNum +
    ' year/s, ' +
    moNum +
    ' month/s, ' +
    dayNum +
    ' day/s'
);
console.log('------------------------------');

// Write a code to get difference between dates in days

let dateA = new Date('2022-01-20');
let dateB = new Date('2022-01-22');

const dayDif = Math.abs(dateA - dateB) / (1000 * 60 * 60 * 24);

console.log('Date A               : ' + dateA);
console.log('Date B               : ' + dateB);
console.log('Difference           : ' + dayDif + ' day/s');
console.log('------------------------------');

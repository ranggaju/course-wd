console.log('------------------------------');
console.log('                              ');
console.log('       Exercise Day 05        ');
console.log('                              ');
console.log('------------------------------');

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
console.log('------------------------------');

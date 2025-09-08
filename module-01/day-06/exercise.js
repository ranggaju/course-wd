const linerLen = 30;
const liner = (char = '') => char.repeat(linerLen);
const padding = (text = '') => ' '.repeat(Math.floor((linerLen - text.length) / 2));

const hd = (text, level = 1) => {
  const header = `- ${text} -`;
  const pad = padding(header);
  const border = level === 1 ? '=' : '-';
  const top = level === 1 ? `${liner(border)}\n\n` : '';
  const bot = level === 1 ? `\n\n${liner(border)}` : level == 2 ? `\n${liner(border)}` : '';

  console.log(`${top}${pad}${header}${bot}`);
};

const bl = (char) => console.log(liner(char));

hd('Exercise Day 06');

hd('01', 3);

// Create a function to calculate array of student data

class Student {
  constructor(Name, Email, DateOfBirth, Score) {
    this.name = Name;
    this.email = Email;
    this.age = this.countAge(DateOfBirth);
    this.score = Score;
  }

  countAge(DateOfBirth) {
    const Age = Math.round(((new Date() - new Date(DateOfBirth)) / (365.25 * 24 * 60 * 60 * 1000)) * 100) / 100;
    return Age;
  }
}

const studentA = new Student('Abe', 'abe@school.com', '2009-07-26', 80);
const studentB = new Student('Bambo', 'bambo@school.com', '2009-10-17', 70);
const studentC = new Student('Cici', 'cici@school.com', '2009-11-04', 90);
const studentD = new Student('David', 'david@school.com', '2010-02-02', 100);

const students = [studentA, studentB, studentC, studentD];

const calculateSum = (students = []) => {
  const getStat = (arr = [], key) => {
    const val = arr.map((s) => s[key]);
    const max = val.reduce((a, b) => (a > b ? a : b));
    const min = val.reduce((a, b) => (a < b ? a : b));
    const average = val.reduce((a, b) => a + b, 0) / val.length;

    const highest = arr.filter((s) => s[key] === max).map((s) => `${s.name} (${s[key]})`);
    const lowest = arr.filter((s) => s[key] === min).map((s) => `${s.name} (${s[key]})`);

    return {
      highest: highest.join(', '),
      lowest: lowest.join(', '),
      average: Math.round(average * 100) / 100,
    };
  };

  const scoreStat = getStat(students, 'score');
  const ageStat = getStat(students, 'age');

  return `score:\n  highest : ${scoreStat.highest}\n  lowest  : ${scoreStat.lowest}\n  average : ${scoreStat.average}\n\nage:\n  highest : ${ageStat.highest}\n  lowest  : ${ageStat.lowest}\n  average : ${ageStat.average}`;
};

console.log(calculateSum(students));

hd('02', 3);

// Create a program to create transaction

class Product {
  constructor(Name, Price) {
    this.name = Name;
    this.price = Price;
  }
}

class Transaction {
  constructor() {
    this.cart = [];
    this.total = 0;
  }

  addToCart(product, qty = 1) {
    const item = this.cart.find((c) => c.product.name === product.name);
    item ? (item.qty += qty) : this.cart.push({ product, qty });
    this.total += product.price * qty;
  }

  showTotal() {
    console.log(`Total: ${this.total}`);
  }

  checkOut(cash) {
    const transactionData = {
      items: this.cart.map((c) => ({
        name: c.product.name,
        price: c.product.price,
        qty: c.qty,
        subtotal: c.product.price * c.qty,
      })),
      total: this.total,
      change: cash - this.total,
    };
    this.cart = [];
    this.total = 0;

    console.log(transactionData);
  }
}

const productA = new Product('Pencil', 1500);
const productB = new Product('Eraser', 1000);
const productC = new Product('Pen', 3000);
const productD = new Product('Ruler', 4000);

const sell = new Transaction();

sell.addToCart(productA, 2);
sell.addToCart(productB, 1);
sell.addToCart(productC, 1);
sell.addToCart(productD, 1);
sell.addToCart(productA, 1);
sell.addToCart(productC, 1);

sell.showTotal();

sell.checkOut(20000);

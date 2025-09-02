// 01. persegi panjang

let rectLen = 5;
let rectWid = 3;

const rectArea = rectLen * rectWid;
const rectPerim = 2 * (rectLen + rectWid);

console.log("Panjang persegi panjang: " + rectLen + " unit");
console.log("Lebar persegi panjang: " + rectWid + " unit");
console.log("Keliling persegi panjang: " + rectPerim + " unit");
console.log("Luas persegi panjang: " + rectArea + " unit persegi");

// 02. lingkaran

let cirRad = 5;

const diCir = 2 * cirRad;
const cirCirc = parseFloat((2 * Math.PI * cirRad).toFixed(4));
const cirArea = parseFloat(Math.trunc(Math.PI * cirRad ** 2 * 1000) / 1000);

console.log("Jari-jari lingkaran: " + cirRad + " unit");
console.log("Diameter lingkaran: " + diCir + " unit");
console.log("Keliling lingkaran: " + cirCirc + " unit");
console.log("Luas lingkaran: " + cirArea + " unit persegi");

// 03. segitiga

let trglAngA = 80;
let trglAngB = 65;

const trglAngC = 180 - (trglAngA + trglAngB);

console.log("Sudut A segitiga: " + trglAngA + " derajat");
console.log("Sudut B segitiga: " + trglAngB + " derajat");
console.log("Sudut C segitiga: " + trglAngC + " derajat");

// 04. days

let daysNum = 400;

const yrNum = Math.floor(daysNum / 365);
const moNum = Math.floor((daysNum % 365) / 30);
const dayNum = (daysNum % 365) % 30;

console.log(
  daysNum +
    " hari -> " +
    yrNum +
    " tahun, " +
    moNum +
    " bulan, " +
    dayNum +
    " hari"
);

// 05. dates

let dateA = new Date("2022-01-20");
let dateB = new Date("2022-01-22");

const dayDif = Math.abs(dateA - dateB) / (1000 * 60 * 60 * 24);

console.log("Tanggal A: " + dateA);
console.log("Tanggal B: " + dateB);
console.log("Jumlah hari antara tanggal: " + dayDif + " hari");

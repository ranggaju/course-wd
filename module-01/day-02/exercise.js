let nNum = 7;

if (nNum % 2 == 0) {
  console.log('Angka ' + nNum + ' adalah bilangan genap');
} else {
  console.log('Angka ' + nNum + ' adalah bilangan ganjil');
}

let nPrime = nNum;
let sPrime;

for (let i = 2; i < nPrime; i++) {
  if (nPrime % i == 0) {
    sPrime = 'komposit';
    break;
  }
  sPrime = 'prima';
}

console.log('Angka ' + nPrime + ' adalah bilangan ' + sPrime);

let nNumSig, sNumSig;
let nNumFac, sNumFac;
let nNumFibA, nNumFibB, nNumFibC;

for (let i = 1; i <= nNum; i++) {
  if (i == 1) {
    nNumSig = i;
    nNumFac = i;
    nNumFibA = 0;
    nNumFibB = 1;
    sNumSig = i;
    sNumFac = i;
  } else {
    nNumSig = nNumSig += i;
    nNumFac = nNumFac *= i;
    nNumFibA = nNumFibB;
    nNumFibB = nNumFibC;
    sNumSig = sNumSig + ' + ' + i;
    sNumFac = sNumFac + ' x ' + i;
  }
  nNumFibC = nNumFibA + nNumFibB;
}

console.log(nNum + 's -> ' + sNumSig + ' = ' + nNumSig);
console.log(nNum + '! -> ' + sNumFac + ' = ' + nNumFac);
console.log('Deret Fibionacci ke-' + nNum + ' adalah ' + nNumFibB);

let nInp = 9;
let nLim = 10;

for (let i = 1; i <= nLim; i++) {
  console.log(`${nInp} x ${i} = ${nInp * i}`);
}

let sPal = 'madam';
let sRev = sPal.split('').reverse().join('');

if (sPal == sRev) {
  console.log(`${sPal} adalah palindrom`);
} else {
  console.log(`${sPal} bukan palindrom`);
}

let nUnit = 100000;

const nKilo = Math.floor(nUnit / 1000);

console.log(`${nUnit} cm = ${nKilo} km`);

let nCur = 123456.002;

function fxCurFrmt(number) {
  let nNum = Math.floor(number);
  let nDec = Math.round((number - nNum) * 100);

  return `Rp${nNum.toLocaleString('id-ID')},${nDec.toString().padStart(2, 0)}`;
}

console.log(fxCurFrmt(nCur));

let sOrg = 'Hello world, hello universe';
let sOrgSrch = 'hello';

function fxRmvFrst(sStc, sSrch) {
  let nIdx = sStc.indexOf(sSrch);
  if (nIdx != -1) {
    return sStc.slice(0, nIdx) + sStc.slice(nIdx + sSrch.length).trim();
  }
  return sStc.trim();
}

console.log(fxRmvFrst(sOrg, sOrgSrch));

function fxKplFrst(sStc) {
  let aStc = sStc.split(' ');
  for (let i = 0; i < aStc.length; i++) {
    aStc[i] = aStc[i].charAt(0).toUpperCase() + aStc[i].slice(1);
  }
  return aStc.join(' ');
}

console.log(fxKplFrst(sOrg));

function fxSwpCs(sStc) {
  let sSwp = '';
  for (let i = 0; i < sStc.length; i++) {
    let sChr = sStc.charAt(i);
    if (sChr == sChr.toUpperCase()) {
      sSwp += sChr.toLowerCase();
    } else {
      sSwp += sChr.toUpperCase();
    }
  }
  return sSwp;
}

console.log(fxSwpCs(sOrg));

let nNumA = 42;
let nNumB = 27;
let nNumC = 18;

function fxMaxArr(aNum) {
  let nMax = aNum[0];
  for (let i = 1; i < aNum.length; i++) {
    if (aNum[i] > nMax) {
      nMax = aNum[i];
    }
  }
  return nMax;
}

console.log(fxMaxArr([nNumA, nNumB, nNumC]));

function fxSrtArr(aNum) {
  for (let i = 0; i < aNum.length - 1; i++) {
    for (let j = i + 1; j < aNum.length; j++) {
      if (aNum[i] > aNum[j]) {
        let nTmp = aNum[i];
        aNum[i] = aNum[j];
        aNum[j] = nTmp;
      }
    }
  }
  return aNum;
}

console.log(fxSrtArr([nNumA, nNumB, nNumC]));

let anyInp = 'true';

function fxCekTpe(anyVal) {
  let nVal = (typeof anyInp == 'string') * 1 + (typeof anyInp == 'number') * 2;
  nVal += (nVal == 0) * 3;
  return nVal;
}

console.log(fxCekTpe(anyInp));

let sInp = 'An apple a day keeps the doctor away';
let sHd = 'a';

function fxHdnChr(sStc, sHdnChr) {
  let aStc = sStc.split('');
  for (let i = 0; i < aStc.length; i++) {
    if (aStc[i].toLowerCase() == sHdnChr.toLowerCase()) {
      aStc[i] = '*';
    }
  }
  return aStc.join('');
}

console.log(fxHdnChr(sInp, sHd));

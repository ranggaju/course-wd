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

let sOrg = 'Hello World Hello';
let sOrgSrch = 'Hello';
let sOrgRmv = sOrg.split(sOrgSrch).join('').trim();

console.log(`${sOrg} -> ${sOrgRmv}`);

let s = 'a';
let n = 10;

const repeatedString = (s,n) => {

    let stringRepeated = Math.floor(n/s.length);
    let countLetterA = (s.match(/a/g) || []).length;
    let numberOfRemainder = n % s.length
    let numberOfRemainderA = s
    .split('')
    .slice(0, numberOfRemainder)
    .filter((e) => e === 'a').length
    
    return n%s.length === 0 ? stringRepeated * countLetterA : stringRepeated * countLetterA + numberOfRemainderA
}

console.log(repeatedString(s,n)); 
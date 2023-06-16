// Calling even or odd numbers in for loop 
let num = 5;

for (let i = 1; i <= num; i++) {
    (i % 2 == 0) ? console.log(`${i} is even number`) : console.log(`${i} is odd number`);
}

// Find Uppercased letters 
let word = "WebBraiN";

const onlyUpper2 = word.replace(/[^A-Z]/g, '');
console.log(onlyUpper2);

// Finding specific letters from string 
let str = 'Assalomu aleykum'
let stnCounter = 0;

for (let i = 0; i <= str.length; i++) {
    if (str[i] == 'a' || str[i] == 'A' )   stnCounter++;
}
console.log(`number of  "A" or "a" is ${stnCounter}`);

// Reverse the word 

let text = 'Fozil new';
let reversedText = text.split('').reverse().join("");
console.log(reversedText);
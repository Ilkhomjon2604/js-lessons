let num = 5;

for (let i = 1; i<= num; i++){
    (i % 2== 0) ? console.log( `${i} is even number`) : console.log( `${i} is odd number`);
}

let word = "WebBraiN";

const onlyUpper2 = word.replace(/[^A-Z]/g, '');
console.log(onlyUpper2);


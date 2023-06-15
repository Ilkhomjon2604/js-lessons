// let num = 1590;

// if (num % 3=== 0  && num % 5 === 0){
//     console.log(`${num} can be devided by both 5 and 3`);
// }else if(num % 3=== 0   ){
//     console.log(`${num} can be devided by only 3`);
// }else if(num % 5 === 0 ){
//     console.log(`${num} can be devided by only 5`);
// }else{
//     console.log(`${num} can't be devided by any of these numbers`);
// }

// // ---------------------------------------------------

// let browser = 'chrome';

// if ( browser == 'Edge' ){
//     console.log(`You've got ${browser} on your device`);
// }else if(browser == 'Chrome' || browser =='Firefox' || browser == 'Safari' || browser == 'Opera'){
//     console.log(`Ok, you've got ${browser} and we support it also`);
// } else{
//     console.log(`we hope that this page looks ok in your ${browser} browser`);
// }

// // --------------------------------------------------------

// let message;
//  let login = 'Employee'

//  login == 'Employee' ? message = 'Hello mate' : login == 'Director' ? message = 'Greetings Boss' : login == '' ? message = '' : console.log('unknown user attemp to enter');

//  console.log(message);




let obj = {
    0 : 'nul',
    1 : "bir" , 
    2 : "ikki" , 
    3: "uch" ,
    4 : "to'rt",
    5: "besh",
    6 : "olti",
    7 : "yetti",
    8 : "sakkiz",
    9: "to'qqiz",
    10 : "o'n",
    20 : "yigirma",
    30 : "o'ttiz",
    40 : "qirq",
    50 : "ellik",
    60 : "otmish",
    70 : "yetmish",
    80: "sakson",
    90 : "qo'qson",
    100 : "yuz",
}
let number = prompt('put the number')
if (number >=10 && !obj[number]){
    let first = number.slice(0, 1) + 0;
    let last = number.slice(1);
    console.log(`${obj[first]} ${obj[last]}`);
} else{
    console.log(obj[number]);
}
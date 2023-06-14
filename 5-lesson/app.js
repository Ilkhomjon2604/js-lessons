let num = 1590;

if (num % 3=== 0  && num % 5 === 0){
    console.log(`${num} can be devided by both 5 and 3`);
}else if(num % 3=== 0   ){
    console.log(`${num} can be devided by only 3`);
}else if(num % 5 === 0 ){
    console.log(`${num} can be devided by only 5`);
}else{
    console.log(`${num} can't be devided by any of these numbers`);
}

// ---------------------------------------------------

let browser = 'chrome';

if ( browser == 'Edge' ){
    console.log(`You've got ${browser} on your device`);
}else if(browser == 'Chrome' || browser =='Firefox' || browser == 'Safari' || browser == 'Opera'){
    console.log(`Ok, you've got ${browser} and we support it also`);
} else{
    console.log(`we hope that this page looks ok in your ${browser} browser`);
}

// --------------------------------------------------------
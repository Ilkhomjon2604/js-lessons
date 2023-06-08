const elFruit = document.querySelector('.fruit');

let fruit = prompt('write fruit name in english', 'apple');
let score = prompt('write your score', '86');
let number = prompt('write number to check odd or even', '1');


switch (fruit) {
    case 'oranges':
       
        console.log('Oranges are $0.59 for a kg.');
        break;
    case 'mango':
        console.log('Mangoes is  $2.79 for a kg.');
        break;
    case 'banana':
        console.log('Banana is  $1.49 for a kg.');
        break;
    case 'apple':
        console.log('Apple is  $0.74 for a kg.');
        break;
    case 'pineapple':
        console.log('Paniapple is  $0.79 for a kg.');
        break;
    case 'grips':
        console.log('grips is  $1.09 for a kg.');
        break;
    case 'kiwi':
        console.log('Kiwi is  $2.19 for a kg.');
        break;
    default:
        console.log(`Sorry, we are out of ${fruit}.`);
}


elFruit.innerHTML = `Hello You are looking for ${fruit}. In order to see the price, please check console !!!`;



// Score 


if( score >= 86 && score <=100){
 console.log("You have passed and got A");
}else if( score >= 60 && score <=85){
    console.log("You have passed and got B");
}else if( score >= 45 && score <=59){
    console.log("You have to retake the exam and got C ");
}else if( score >= 1 && score <=44){
    console.log("You failed, Restudy. you got F ");
}else{
    console.log('you did not entered valid score 1 to 100');
};

// EVEN OR ODD 

if( number % 2 == 0 ){
    console.log("The number is even.");
   }else {
    console.log("The number is odd.");
   }
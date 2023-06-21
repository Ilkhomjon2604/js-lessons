// Math.cbrt 

let MathRoot = (a) =>{
    return a ** 0.5
}
console.log(MathRoot(25));

// Math.ceil()

let MathSeil = (a) =>{
   let main = a.toString().split('.');
   if ( main[0] > 0){
    return  Number(main[0]) + 1
   } else {
    return  Number(main[0])
   }
}
console.log(MathSeil(-53.332));

// Math.floor()

let MathFloor = (a) =>{
    let main = a.toString().split('.');
    if ( main[0] > 0){
        return  Number(main[0]) 
       } else {
        return  Number(main[0]) -1
       }
   
}

console.log(MathFloor(3.332));

// Math.pow()

let MathPow = (a, b) =>{
    return a ** b
}
console.log(MathPow(7, 2));

// Math.round()

let MathRound= (a) =>{
    let main = a.toString().split('.');
   
    if ( main[1] >= 50){
        return  Number(main[0]) + 1
       } else {
        return  Number(main[0]) 
       }
}

console.log(MathRound(4.05));

// Math.sign()

let MathSign = (a) =>{
    if (a > 0){
        return 1;
    }else if ( a < 0){
        return -1;
    }else{
        return a
    }
}

console.log(MathSign(-2));

// Math.sqrt()

let MathSqrt = (a) =>{
    return a ** 0.5
}

console.log(MathSqrt(9));

// Math.trunc()

let MathTrunc = (a) =>{
    let main = a.toString().split('.');
    return Number( main[0])
}

console.log(MathTrunc(-0.92));


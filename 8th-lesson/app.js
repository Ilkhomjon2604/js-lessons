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


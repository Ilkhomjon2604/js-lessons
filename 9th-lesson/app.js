// N1 Last letter L means true 
let checkLastLetter = (a) =>{
  return Boolean( a[a.length -1] == 'l' | a[a.length -1] == 'L')
}
console.log(checkLastLetter('FoziL'));

// N2 switch string value 

let switchValeu = (a, b) => {
    let c = a;
    a = b;
    b = c;
    return `${a}  ${b}`
}   
console.log(switchValeu('IT', 'Acedumy'));

// N3 Kabisa Year 

let kabisaYear = (a) => {
   return (a % 4 == 0) ? `${a} is Kabisa year` : `${a} is NOT Kabisa year`
} 
console.log(kabisaYear(2020));

// N4 Min and max 

let MinAndMax = (x) =>{
    x = x.split('');   
   return `${(Math.max(...x))} is max number and ${(Math.min(...x))} is the min number `
}
console.log(MinAndMax('12548434'));
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

// N5 Replace # to ()

let replaceSymbol = (x) =>{
  return x.replace(/#/g, '( )', )
   
}
console.log(replaceSymbol('Web#Brain#Academy'));

// N6 choose uppercased letters 

let upperCased = (a) =>{
    let arr = [];
    for (let i = 0; i<a.length; i++)
        if (a[i] === a[i].toUpperCase())  arr.push(a[i])

    return arr.join('')
}
console.log(upperCased("WebBrainA"));

// N7 Repeat str 

let repeatStr = (str) => str.repeat(str.length)

console.log(repeatStr("WebBrain "));

let str1 = 'WebBrain'
str1= str1.replace('Web', 'IT ')
console.log(str1.repeat(3));
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
    console.log(a,b);
    return a + b

}   

console.log(switchValeu('IT', 'Acedumy'));
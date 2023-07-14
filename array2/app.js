let arr =[ 1, [ 3, [5]],[10] ];
let sum = arr.flat(Infinity).reduce((int, total)=> int + +total, 0)
console.log(sum);


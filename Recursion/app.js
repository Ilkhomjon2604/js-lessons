
// 1-getting sum of nested obj age
// 2-finding sum of n 
// n = 5
// 5 + 4 + 3 + 2 + 1 => 15
// 3-removing duplicates without using new Set() [1, 1, 2, 2] => [1, 2]


//2///////////////// // 2-finding sum of n 
// let sum = 0;
// let countSum = (n) => {
//     console.log(n);
//     if (n === 0) return sum;
//     else return sum += n, countSum(n - 1);
//     // return (n === 0) ? sum : sum+=n, countSum
// }

// console.log(countSum(5));


//1///////////////// // 1-getting sum of nested obj age

// obj = {
//     name : 'John',
//     age: 89,
//     child : {
//         name : 'Jone',
//         age : 65,
//         child: {
//             name : 'Jam',
//             age : 40,
//             child : {
//                 name : 'Jim',
//                 age : 18
//             }
//         }
//     }
// }
// let total = 0;
// let ages = () =>{

//     while (!obj.child) return total + obj.age;
//     return  total +=obj.age, ages(obj = obj.child)

//     // if (!obj.child)  return total + obj.age;
//     //else return total +=obj.age, ages(obj = obj.child)
// }

// console.log(ages());



//3///////////////////////////// 3-removing duplicates

// let arr = [11, 12,  3, 41, 13, 57, 20, 57, 41 ];

// let result = arr.filter((elem, index) => {
//     return arr.indexOf(elem) === index;
// });

// console.log(result.sort((a, b) => a - b));


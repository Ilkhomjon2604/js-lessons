// Task 1

// let arr =[ 1, [ 3, [5]],[10] ];
// let sum = arr.flat(Infinity).reduce((int, total)=> int + +total, 0)
// console.log(sum);



// Task 2
// let cars = [
//     { id: 1 , year: 1998, engine: 1, name:'Tico' },
//     { id: 2 , year: 2005, engine: 1.2, name:'Matiz' },
//     { id: 3 , year: 2010, engine: 1.6, name:'Gentra' },
//     { id: 4 , year: 2010, engine: 1.5, name:'Cobalt' },
//     { id: 5 , year: 2012, engine: 2, name:'Malibu' },
//     { id: 6 , year: 2000, engine: 1.2, name:'Damas' },
//     { id: 7 , year: 2018, engine: 2.4, name:'Tracker' }
// ];
// filter ============================

// let oldCars = cars.filter((value)=> value.year < 2000)
// console.log(oldCars);

// Add value ======================
// console.log(cars.map((value)=> value["engine"].sort()));
// cars.map((value)=> {
//     if (value.year< 2005)  value.status = 'Old' })
// console.log(cars);

// Sort ++++++++++++++++++++++++++++++++==

// const sortByYear = () =>{
//     let res = cars.sort((a, b) => a.engine - b.engine);
//     cars = res
// };

// sortByYear()
// console.log(cars);



// Task 3

// let arr = [3, 2, 52, 12, 4, 34, 222]
// let ordered = arr.sort((a, b)=> a-b)
// console.log(ordered[0], ordered.at(-1));
// console.log(Math.max(...arr), Math.min(...arr));

// Task 4

// let arr = ['apple', 'banana', 'melon', 'peach', 'pineapple', 'grenate']
// let onDelete = (a) => arr.filter((value)=> value !== a) 
// console.log(onDelete('banana'));



// function oddCount(n){
//     let arr =[];
//     for(let i = 1;  i < n; i+=2){
//       arr.push(i)
//     }
//     console.log(arr.length);
//     return arr.length
//   }

//   console.log(oddCount(15));
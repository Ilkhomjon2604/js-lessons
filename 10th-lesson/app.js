// let user = {};
// user.name = 'John'
// console.log(user);
// user.surename = 'Smith';
// console.log(user);
// user.name = 'Pate';
// console.log(user);
// delete user.name
// console.log(user);

// Task 2 ======================================================================================

// let schadule = {};

// let isEmpty = (a) =>  Object.keys(a).length ? false : true 

// alert( isEmpty(schadule))

// schadule['8:30'] = 'Get up'

// alert( isEmpty(schadule))

// Task 3 -------------------------------------------------------------------------------------------

// let salary = {
//     John : 230,
//     Sara : 190,
//     Nick : 210
// }
// let sum = 0;

// let length = Object.values(salary).length

// for ( let i = 0; i<length; i++) sum += +Object.values(salary)[i]
    

// console.log(sum);

// Task 4 ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

let menu = {
    width : 200,
    height : 300, 
    color : 'blue'
}

let multiplyMenu = (a) =>{

    for (let i = 0; i < Object.values(a).length; i++){

        if(!isNaN(Object.values(a)[i])){
            Object.values(a)[i] = Object.values(a)[i] * 2
            console.log(Object.values(a)[i]);
        }

    }
    
}

multiplyMenu(menu)
console.log(menu);
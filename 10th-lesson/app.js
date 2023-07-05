// let user = {};
// user.name = 'John'
// console.log(user);
// user.surename = 'Smith';
// console.log(user);
// user.name = 'Pate';
// console.log(user);
// delete user.name
// console.log(user);

let schadule = {};

let isEmpty = (a) =>  Object.keys(a).length ? false : true 

alert( isEmpty(schadule))

schadule['8:30'] = 'Get up'

alert( isEmpty(schadule))


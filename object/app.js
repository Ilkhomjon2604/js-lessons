// / N1
// object keylarini toping

// let obj = {
//     name : 'web',
//     age : 10
// }

// for (const key in obj) {
//     console.log(key);
// }

// no2
// object valuelarining raqamga tenglarini toping

// let obj = {
//         name : 'web',
//         age : 10
//     }
    
//     for (const key in obj) {
//         (typeof obj[key] == 'number') ? console.log(key): obj
//     }


    // No3
// object valuelarining boolean tipidagi malumotlrini qaytaring 
// let obj={
//         id:1,
//         name:"WebBrain",
//         offline:true,
//         online:true,
//         individual:false
//     }

//     let newObj = {};

//     for (const key in obj) {
//         if (typeof obj[key]== 'boolean') {
//            newObj[key] = obj[key]
            
//         }
//     }
    // console.log(newObj);

    // N4 ______________________

    let person = {
    id: 1,
    name: 'Odil',
    age:78,
    child: {
        id: 1,
        name: 'Ali',
        age:48,
        child: {
            id: 1,
            name: 'Umar',
            age:20
        }
    }
}
let sum = 0

    while (person) {
        sum+= person.age
        person = person.child
    }
    console.log(sum);
// chiqish
// 146
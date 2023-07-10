// let arr = [
//     {id : 1, name:'Jama'},
//     {id : 2, name:'John'},
//     {id : 3, name:'Sara'},
//     {id : 4, name:'Mick'}];
// let newArr = [];
// let search = (a) =>{
//     for(let i = 0; i < arr.length; i++)  if (arr[i]["name"].toLocaleLowerCase().includes(a.toLowerCase())) newArr.push(arr[i])    
//     return newArr}
// console.log(search('m'));

function firstRepeating(str)
{
     
    // Creates an empty hashset
    let h = new Set();
     
    // Traverse the input array from left to right
    for(let i = 0; i <= str.length - 1; i++)
    {
        let c = str[i];
 
        // If element is already in hash
        // set, update x and then break
        if (h.has(c))
            return c;
        // Else add element to hash set
        else
            h.add(c);
    }
    return '\0';
}

let str = "ABBACC";
console.log(firstRepeating(str));
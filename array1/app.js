let arr = [
    {id : 1, name:'Jama'},
    {id : 2, name:'John'},
    {id : 3, name:'Sara'},
    {id : 4, name:'Mick'}];
let newArr = [];
let search = (a) =>{
    for(let i = 0; i < arr.length; i++)  if (arr[i]["name"].toLocaleLowerCase().includes(a.toLowerCase())) newArr.push(arr[i])    
    return newArr}
console.log(search('m'));


var arrayNumbers=[2,4,1,7,9,8];
console.log(`---------original array----------`);
console.log(arrayNumbers);

console.log(`---------deleting last element array----------`);
arrayNumbers.pop();
console.log(arrayNumbers);


console.log(`---------adding last element array----------`);
arrayNumbers.push(55);
console.log(arrayNumbers);

console.log(`---------adding oth index array----------`);
arrayNumbers.unshift(10);
console.log(arrayNumbers);

console.log(`----------------remove an element from 0th index---------`);
arrayNumbers.shift();
console.log(arrayNumbers);

console.log(`-----------sub array-----------------`);
var sub=arrayNumbers.slice(4,6);
console.log(arrayNumbers);
console.log(sub);

console.log(`----------remove or delete ,middle of array--------`);
console.log(arrayNumbers);
var newArray=arrayNumbers.splice(2,3);
console.log(newArray);

console.log(`insert at middle of array`);
var arrayNumbers=[2,4,1,7,9,8];
console.log(arrayNumbers);
arrayNumbers.splice(3,1,100);
console.log(arrayNumbers);
arrayNumbers.splice(5,0,500,400);
console.log(arrayNumbers);




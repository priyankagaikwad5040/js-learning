let arraynums=[2,4,1,6,8,7,9];
console.log(arraynums);

console.log(`total Element  -${arraynums.length}`);

console.log(`Accessing arrays element`);
console.log(`0th element    -${arraynums[0]}`);

var len=(arraynums.length)-1;
console.log(`Accessing last element using length     ${arraynums[len]}`);

console.log(`----------include()-------------`);
console.log(`${arraynums.includes(10)}`);
console.log(`${arraynums.includes(4)}`);

console.log(`----------indexof()-------------`);
console.log(`${arraynums.indexOf(2)}`);
console.log(`${arraynums.indexOf(1)}`);

console.log(`-------------Traversing Arrays------------`);
const arraynum=[2,6,4,8,5];
for (let index = 0; index < arraynum.length; index++) {
    const element = arraynum[index];
    console.log(element);
}

console.log(`-------------Traversing Arrays in reverse------------`);
const arraynu=[2,6,4,8,5];
for (let index = (arraynu.length)-1; index >=0; index--) {
    const element = arraynu[index];
    console.log(element);
}



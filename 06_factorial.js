function factorialOfNum(num){
    if (num==null || num==NaN || num==undefined)
    {
        // console.log(`Pleas enter number in 1-100 range`);
        console.log(`Factorial of ${num}  is    Invalid input`);
    }
    else{
    var fact=1;
    for (let index = num; index >=1; index--) {
        fact=fact*index;
        
        
    }
    console.log(`Factorial of ${num}  is ${fact}`);
}}
factorialOfNum(5);
factorialOfNum(NaN);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(9);
factorialOfNum(undefined);
factorialOfNum(0);
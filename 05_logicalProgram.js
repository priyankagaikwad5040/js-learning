
// to check the length of word is odd or even

var result=function (word){
   console.log("Inside function Expression"); 
   var check=word.length%2==0 ? "even" : "Odd" ;
   console.log(check);
}
result("javaScript");

// to check given no. is multiple of 3 or not

var mul=function(num1){
    var check=num1%3==0 ? "yes" : "No";
    console.log(`${num1} is multiple of 3   -${check}`);
}

mul(10);
mul(9);

console.log(`operation ${true +1}`);
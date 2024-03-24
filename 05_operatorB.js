console.log(`---------------step 1-----------------`);
function greaterNumber(num1,num2){
    var check=(num1>num2) ? num1 : num2;
    
    console.log(`${check} is greater number than other one`);

}
greaterNumber(10,-10);
greaterNumber(800,899);

 console.log(`----------------step2---------------------`);
function isEvenOrOddNum(num1){
    var result=(num1%2 ==0);
    return result;
}
var oddeven=isEvenOrOddNum(29);
console.log(oddeven);
var oddeven=isEvenOrOddNum(44);
console.log(oddeven);
var oddeven=isEvenOrOddNum(0);
console.log(oddeven);
var oddeven=isEvenOrOddNum(101);
console.log(oddeven);

console.log(`--------------step3------------------------`);
function wordLength(word){
    var len=word.length;
    var check=(len%2==0)? "EVEN" : "ODD";
    return check;
}
var show=wordLength("JavaScript");
console.log(`The length of the word id ${show}`);
var show=wordLength("developer");
console.log(`The length of the word id ${show}`);
var show=wordLength("Google");
console.log(`The length of the word id ${show}`);




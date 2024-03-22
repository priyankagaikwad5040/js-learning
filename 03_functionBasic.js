
// function with no argument and no return value
function show(){
    console.log("inside the function");
}
show();

// function with argument and no return value
function addition(n1,n2,n3){
    console.log("Arguments            ",n1,n2,n3);
    var result=n1+n2+n3;
    console.log("Addition              ",result);

}
addition(6,7,8);
addition(28763.56,75,897);
addition(3,7);
addition(12,46,78,66)
addition("hi","good",4);


//  function with argument and return value
 function substraction(num1,num2){
    console.log("Arguments            ",num1,num2);
    var result=num2-num1;
    return result;
}

var returnValue=substraction(10,5);
console.log("result of substraction          ",returnValue);

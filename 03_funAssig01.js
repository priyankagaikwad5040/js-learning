console.log("-----------------------------step 1------------------------");
function course(){
    console.log("I am learning Java Script");
}
function softskills(){
    console.log("Softskills are important part of Personality  Development");
}
course();
softskills();
console.log("-----------------------------step 2------------------------");
function personalDetails(firstName,lastName,collegeName){
    console.log("My Name                 -",firstName);
    console.log("My Surname              -",lastName);
    console.log("My College Name         -",collegeName);
}
personalDetails("Priyanka","Gaikwad","JNEC");
console.log("-----------------------------step 3------------------------");
function swapValues( val1,val2){
    console.log("values Before Swapping       -",val1,val2);
    var temp=val1;
    val1=val2;
    val2=temp;
    console.log("values After Swapping       -",val1,val2);
}
swapValues("Virat","Anushka");
swapValues(1000,2000);
console.log("-----------------------------step 4------------------------");
function addThreeValues(num1,num2,num3){
    console.log("Three Values are          -",num1,num2,num3);
    var result=num1+num2+num3;
    console.log("Addition is               -",result);
}
addThreeValues(10.23,600,40);
addThreeValues("Hello","  Good","  Morning");

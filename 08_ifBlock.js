var marriageCheck=function(age,name,gender){
if (age>=21 && gender=="male") {
    console.log(`Eligible for married ${age} ${name}`);
}

}

marriageCheck(21,"jenny","male");
marriageCheck(20,"John","male");

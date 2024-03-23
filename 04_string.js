var greet="Good Morning";
var totalchar=greet.length;
console.log("Total number of char of greet       ",greet);

var charAt8=greet.charAt(8);
console.log("Character at index 8        -",charAt8);

var charAt11=greet.charAt(11);
console.log("Character at index 11        -",charAt11);

var sentence="Zoom Video Communications, Inc. is a communications technology company headquartered in San Jose, California, United States";
    var totalLengh=sentence.length;
    var lastChar=sentence.charAt(totalLengh-1);
    console.log("Last Character of sentence        -"  ,lastChar);


    console.log("===========indexOf()");
    var indexOfM=greet.indexOf('M');
    console.log("Index of M                       -",indexOfM);

    console.log("========== ConCat()");
    var first="Priyanka";
    var last="Gaikwad";
    var join=first.concat(last);
    console.log("Concat Two string           -",join);

    console.log("================Replace()");
    var greet="Good Morning";
    var afterreplace=greet.replace("Morning","Afternoon");
    console.log( afterreplace);

    console.log("===================toUppercase()");
    var inupperCase=greet.toUpperCase();
    console.log(`${greet} in UpperCase ${inupperCase}`);

    console.log("=============trim()");
    var  greet="Good Morning         ";
    var afterTrim=greet.trim();
    console.log(`before trim   :${greet} and after trim ${afterTrim}`);
          
    console.log("==============includes()");
    console.log(`${greet} includes ${greet.includes("Morn")}`);

    console.log("================slice()");
    console.log(`${greet.slice(1,5)}`);


console.log(`========== trim() ==================`);
var greet = "   Good Morning   ";
var lengthBeforeTrim = greet.length;
console.log(` ${greet} it's length is : ${lengthBeforeTrim} `);

var greetAfterTrim = greet.trim();
var lengthAfterTrim = greetAfterTrim.length;
console.log(` ${greetAfterTrim} it's length is : ${lengthAfterTrim} `);
console.log(`Total spaces removed is: ${lengthBeforeTrim-lengthAfterTrim}`);


console.log(`========== includes() ==================`);
var greet = "Good Morning";
var result = greet.includes("nin");
console.log(`Is string ${greet} includes word or char 'nin': ${result}`);

var result = greet.includes("MoR");
console.log(`Is string ${greet} includes word or char 'MoR': ${result}`);

console.log(`========== search() ==================`);
var greet = "Good Morning";
var result = greet.search("Morning");
console.log(`'Morning' is available at ${result}`);

var result = greet.search("r");
console.log(`'r' is available at ${result}`);

console.log(`========== slice() ==================`);
var greet = "Good Morning";
var result = greet.slice(3, 10);
console.log(`Slice is ${result}`);

console.log(`========== split() ==================`);
var greet = "Good Morning";
var resultValue = greet.split(" ")
console.log(resultValue);
console.log(`Total words are: ${resultValue.length}`);


function totalWords(statement1){

var resultValue = statement1.split(" ")
/*console.log(resultValue);
console.log(`Total words are: ${resultValue.length}`);*/
return resultValue.length;

}
var word=totalWords("I am happy buudy");
console.log(`Total words are in "I am happy buddy"${word}`);
var word=totalWords("I am learning JS the language of internet");
console.log(`Total words are in "I am learning JS the language of internet"${word}`);


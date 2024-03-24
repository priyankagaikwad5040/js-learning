
function stringHandsOn(){
    var sentence="   Hey you are doing good, keep it up   ";
    console.log(`The Original String is  :${sentence}`);
    var len=sentence.length;
    console.log("The length of original string is      -",len);
    var newSent=sentence.trim();
    var newLength=newSent.length;
    console.log(`New String is  :${newSent} with length  : ${newLength}` );
    console.log(`The total no. of extra spaces that is removed is  : ${len-newLength}`);
    console.log(`The First character after trim  :${newSent.charAt(0)}  and The Last character after trim  :${newSent.charAt(newLength-1)}`);
    var word=newSent.split(" ");
    var countWord=word.length;
    console.log(`The Total no of words in the string is   :${countWord}`);
    var index=sentence.indexOf("good");
    console.log(`Index of "good " word in the given string ${index}`);
    console.log(`The Substring from index 22 from given string is   :${sentence.substring(22,len)}`);
    



}
stringHandsOn();
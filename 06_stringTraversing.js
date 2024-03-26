var word="JavaScript";
for (let index = 0; index <=word.length; index++) {
var ch=word.charAt(index);
console.log(ch);
    
}
// wap to count char a
var count=0;
var word="JavaScript";
for (let index = 0; index <=word.length; index++) {
    var ch=word.charAt(index);
    if(ch=='a' || ch=='A'){
    
        count=count+1;
        
    }
}
console.log(`Char a count is ${count}`);  
    
    
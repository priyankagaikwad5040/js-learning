// calculate grade
var marks=100;
if (marks<=34) {
    console.log(`Failed :marks   -${marks}`);
    
} else {
    console.log(`   congratulations you are passed ${marks}`);
    if (marks>=35 && marks<55) {
        console.log(`Grade C  ${marks}`);
        
    } else {
        if (marks>=55 && marks<75) {
            console.log(`Grade B   ${marks}`);
            
        } else {
            if (marks>=75 && marks<=100) {
                console.log(`Grade A ${marks}`);
                
            }
            
        }
        console.log();
        
    }
}
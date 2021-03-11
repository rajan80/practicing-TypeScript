var str:string = "Rajan Shrestha";
var result:string = str.toUpperCase();
console.log(result);

let Career:string='Full Stack Developer';
console.log(Career);

let Description:string= 'I love coding';
console.log(Description);


function displayPosition(Company:string, Title:string, Description:string){
    console.log('* ',Company,Title,Description)
};
displayPosition('Amazon','Problem Solver','computer work');



 console.log("My Previous Experience:")
  displayPosition('Surin West','Manager', 'Daily Operation');
  displayPosition('Fuel Stop','Manager', 'Daily Operation' );


console.log("My Skills:")
displayskills('HTMl',true);
displayskills('Java',true);
displayskills('javascript',true);
displayskills('CSS',true);
displayskills('Maven',false);

function displayskills(mySkill:string, Bam: boolean) {
    if(Bam == true) { 
        console.log("  BAM: " + mySkill);
    } else if(Bam == false) {
        console.log("*  " + mySkill); 
    }
};
var output = [];
var count = 1;
function fizzBuzz(){
    output.push(count++);
 if(count % 3 && count % 5 === 0){
    console.log("FizzBuzz");   
 }
 else if(count % 3 === 0){
     console.log("Fizz");
 }
 else if(count % 5 === 0){
     console.log("FizzBuzz");
 }
 else{
     console.log(output);
 }
}
fizzBuzz(30);

basit
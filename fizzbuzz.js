let num = 15

for (let i = 0; i <= num; i++) {
   if  (i % 3 ==  0 && i % 5 == 0){
    console.log("FizzBuzz");
   } else if (i % 5 == 0){
    console.log("buzz");
   } else if (i % 3 == 0){
    console.log("Fizz");
   } else {
    console.log(i);
   }
}
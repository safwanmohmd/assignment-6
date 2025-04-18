let n = prompt("enter the nth number ")
let a = 0
let b = 1
for (let i = 0; i < n; i++) {
   console.log(`fiboncci : ${a}`);  
   let next = a + b;
   a = b;
   b = next;

}

let num = 14345;
let sum = num.toString();  
let plus = 0;

for (let i = 0; i < sum.length; i++) {
    plus += Number(sum[i]); 
}

console.log(plus); 

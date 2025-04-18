let num = 20;

if (num <= 1) {
    console.log(`${num} is not prime or composite.`);
} else {
    let count = 0;

    for (let i = 2; i < num; i++) {  
        if (num % i === 0) { 
            count+= 1;  
        }
    }
    if (count === 0) {  
        console.log(`${num} is a prime number`);
    } else { 
        console.log(`${num} is a composite number`);
    }
}
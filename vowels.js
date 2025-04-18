let word = "hello world"
let vowels = [ "a", "e", "i", "o", "u"]

let vowelsCount = 0;
let consonents = 0 ;

for (let i = 0; i < word.length -1; i++) {
    let chara = word[i]
    if(vowels.includes(chara)){
        vowelsCount =  vowelsCount + 1
        
    } else {
        consonents = consonents +1
    }
    
}
console.log( `total vowels is : ${vowelsCount} \n total consonents is : ${consonents}`);


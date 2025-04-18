let word = "madam"


let reversedword = ""

for (let i=word.length-1;i>=0;i--){
  reversedword=reversedword+word[i] 
}
if(reversedword == word){
 console.log(`the word ${word} is Palindrome `)
}else{
  console.log(`${word} is not a palindrome`)
}
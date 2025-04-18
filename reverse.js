let word = "hello"

let store = ''

for ( let i = word.length -1; i >= 0; i--){
    store = store + word[i]
}
console.log(store);
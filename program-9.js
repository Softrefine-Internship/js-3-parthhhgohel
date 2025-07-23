// Write a JavaScript program to generate all combinations of a string.

// Input: Dog 
// Output: [ 'd', 'do', 'dog', 'o', 'og', 'g' ]

const str = "dog";
function combStr(str){
    let combinations = [];
    for(let i=0; i<str.length; i++){
        for(let j=i; j<str.length; j++){
            combinations.push(str.slice(i,j+1));
        }
    }
    return combinations;
}

console.log(combStr(str));
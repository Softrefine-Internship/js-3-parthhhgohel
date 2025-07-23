// Write a JavaScript program to count frequency of character in string.

// Input: "hello"
// Output: { 'h': 1, 'e': 1, 'l': 2, 'o': 1 }

let str = "hello";

function freq(str){
    let result = {};
    for(let char of str){
        if(result[char]){
            result[char]++;
        }
        else{
            result[char] = 1;
        }
    };

    return result;
}

console.log(freq(str));
// Write a JavaScript program to check a given string is an anagram of another string.

// Example 1:
// Input: evil = vile
// Output: true

// Example 2:
// Input: a gentleman = elegant man
// Output: true

// Example 3:
// Input: eleven plus two = twelve plus one
// Output: true

let str1 = "a gentleman";
let str2 = "elegant man";

let str3 = "evil";
let str4 = "vile";

function anagrams(str1, str2){
    if(str1.length !== str2.length){
        return false;
    }

    let newStr1 = str1.split(" ").join("");
    let newStr2 = str2.split(" ").join("");
    for(let char in newStr1){
        if(!newStr2.includes(newStr1[char])){
            return false;
        }
    }
    return true;
}
console.log(anagrams(str3, str4));
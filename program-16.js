// Write a JavaScript program to find intersection of two sets.

// Input: 
// let set1 = new Set([1, 2, 3, 4]);
// let set2 = new Set([3, 4, 5, 6]);

// Output: [3, 4]

let set1 = new Set([1, 2, 3, 4]);
let set2 = new Set([3, 4, 5, 6]);

function interSec(set1, set2){
    let result = [];
    for(let el of set1){
        if(set2.has(el)){
            result.push(el);
        }
    }

    return result;
}

console.log(interSec(set1, set2));
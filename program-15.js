// Write a JavaScript program to check subset.

// Example 1:
// Input: 
// let set1 = new Set([1, 2, 3, 4, 5]);
// let set2 = new Set([3, 4]);

// Output: false


// Example 2:
// Input: 
// let set1 = new Set([3, 4]);
// let set2 = new Set([1, 2, 3, 4, 5]);

// Output: true

let set1 = new Set([1, 2, 3, 4, 5]);
let set2 = new Set([3, 4]);

function subset(set1, set2) {
    for (let el of set1) {
        if (!set2.has(el)) {
            return false;
        }
    }
    return true;
}

console.log(subset(set1, set2));
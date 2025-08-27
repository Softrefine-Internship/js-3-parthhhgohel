// Write a JavaScript program to get the longest string in an array.

// Input:  
// arr = [
    // "JavaScript",
    // "Python",
    // "Java",
    // "C++",
    // "Ruby",
    // "Swift",
// ]

// Output: "JavaScript"

let arr = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "Ruby",
    "Swift",
];

let ans = [];

function longestString(arr) {
    let longest = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longest) {
            longest = arr[i].length;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length === longest) {
            ans.push(arr[i]);
        }
    }
    return ans.length === 1 ? ans[0] : ans;
}
console.log(longestString(arr));
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

const result = arr.reduce((acc, curr) => acc.length < curr.length ? curr : acc, "");

console.log(result);
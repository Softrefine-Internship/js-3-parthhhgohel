// Write a JavaScript program to find the longest word within the string.

// Input: "This is a demo String find the largest word from it"
// Output: "largest"


const str = "This is a demo String find the largest word from it";
const strArr = str.split(' ');

const result = strArr.reduce((acc, curr) => acc.length > curr.length ? acc : curr);

console.log(result);
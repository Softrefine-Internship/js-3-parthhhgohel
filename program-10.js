// Write a JavaScript program to find the longest word within the string.

// Input: "This is a demo String find the largest word from it"
// Output: "largest"


const str = "This is a demo String find the largest worddd from it";
const strArr = str.split(' ');

let ans = [];

function longestString(strArr) {
    let longest = 0;
    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].length > longest) {
            longest = strArr[i].length;
        }
    }

    for (let i = 0; i < strArr.length; i++) {
        if (strArr[i].length === longest) {
            ans.push(strArr[i]);
        }
    }
    return ans.length === 1 ? ans[0] : ans;
}
console.log(longestString(strArr));
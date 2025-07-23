// Write a JavaScript program to flatten object into single depth object. whithout changing the original object. and using predifined function.

// Input: 
// obj = {
//     Company: "GeeksforGeeks",
//     Address: "Noida",
//     contact: +91-999999999,
//     mentor: {
//         HTML: "GFG",
//         CSS: "GFG",
//         JavaScript: "GFG"
//     }
// };

// Output: 
// obj = {
//     Company: 'GeeksforGeeks',
//     Address: 'Noida',
//     contact: -999999908,
//     'mentor.HTML': 'GFG',
//     'mentor.CSS': 'GFG',
//     'mentor.JavaScript': 'GFG'
// }


let obj = {
    Company: "GeeksforGeeks",
    Address: "Noida",
    contact: +91-999999999,
    mentor: {
        HTML: "GFG",
        CSS: "GFG",
        JavaScript: "GFG"
    }
};

function flatten(obj) {
    for(let key in obj){
        if(typeof obj[key] === 'object'){
            for(let nestedKey in obj[key]){
                obj[key + '.' + nestedKey] = obj[key][nestedKey];
            }
            delete obj[key];
        }
    }
    return obj;
}


console.log(flatten(obj));
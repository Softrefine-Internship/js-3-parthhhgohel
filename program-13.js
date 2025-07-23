// Write a JavaScript program to group elements by their properties.

// Input:
// arr = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Alice" },
//     { id: 3, name: "Bob" },
//     { id: 4, name: "Alice" },
// ]

// Output:
// { 'John' => [ 1 ], 'Alice' => [ 2, 4 ], 'Bob' => [ 3 ] }

const arr = [
    { id: 1, name: "John" },
    { id: 2, name: "Alice" },
    { id: 3, name: "Bob" },
    { id: 4, name: "Alice" },
];


function groupEle(arr){
    let result = {};
    for(let ele of arr){
        if(result[ele.name]){
            result[ele.name].push(ele.id);
        }else{
            result[ele.name] = [ele.id];
        }
    }
    return result;

}

console.log(groupEle(arr));
//  Write a JavaScript program to filter an array of objects based on a given property value

// Input:  
// arr = [
//     {
//         id: 1,
//         name: "John",
//         department: "HR",
//     },
//     {
//         id: 2,
//         name: "Alice",
//         department: "IT",
//     },
//     {
//         id: 3,
//         name: "Bob",
//         department: "Finance",
//     },
//     {
//         id: 4,
//         name: "Hank",
//         department: "IT",
//     },
// ]
// property = "department";
// value = "IT";

// Output: 
// [
//     { id: 2, name: 'Alice', department: 'IT' },
//     { id: 4, name: 'Hank', department: 'IT' }
// ]

let arr = [
    {
        id: 1,
        name: "John",
        department: "HR",
    },
    {
        id: 2,
        name: "Alice",
        department: "IT",
    },
    {
        id: 3,
        name: "Bob",
        department: "Finance",
    },
    {
        id: 4,
        name: "Hank",
        department: "IT",
    },
]
let property = "department";
let value = "IT";

let result = arr.filter((prop) => prop[property] === value);

console.log(result);
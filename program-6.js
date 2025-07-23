// Write a JavaScript program to modify an object’s property in an array of objects.

// Input:  
// arr = [
    // {
    //     employee_id: 1,
    //     employee_name: "Aman",
    // },
    // {
    //     employee_id: 2,
    //     employee_name: "Bhargava",
    // },
    // {
    //     employee_id: 3,
    //     employee_name: "Chaitanya",
    // },
//  ]

// Output: 
// [
//     { employee_id: 1, employee_name: 'Aman' },
//     { employee_id: 2, employee_name: 'Rahul' },
//     { employee_id: 3, employee_name: 'Chaitanya' }
// ] 


let arr = [
    {
        employee_id: 1,
        employee_name: "Aman",
    },
    {
        employee_id: 2,
        employee_name: "Bhargava",
    },
    {
        employee_id: 3,
        employee_name: "Chaitanya",
    },
 ];

const result = function(arr, id, name){
    arr.findIndex((key) =>{
        if(key.employee_id === id){
            key.employee_name = name;
        }
    })
};
console.log(result(arr, 1, "parth"));
console.log(arr);
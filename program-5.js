// Write a JavaScript program to count number of occurrences of repeated names in an array of objects.

// Input:
// arr = [
//     {
//        employeeName: "Ram",
//        employeeId: 23
//     },
//     {
//        employeeName: "Shyam",
//        employeeId: 24
//     },
//     {
//        employeeName: "Ram",
//        employeeId: 21
//     },
//     {
//        employeeName: "Ram",
//        employeeId: 25
//     },
//     {
//        employeeName: "Kisan",
//        employeeId: 22
//     },
//     {
//        employeeName: "Shyam",
//        employeeId: 20
//     }
//  ]

// Output:
// [
//     {employeeName: "Ram", occurrences: 3},
//     {employeeName: "Shyam", occurrences: 2},
//     {employeeName: "Kisan", occurrences:  1}
// ]

const arr = [
  {
    employeeName: "Ram",
    employeeId: 23,
  },
  {
    employeeName: "Shyam",
    employeeId: 24,
  },
  {
    employeeName: "Ram",
    employeeId: 21,
  },
  {
    employeeName: "Ram",
    employeeId: 25,
  },
  {
    employeeName: "Kisan",
    employeeId: 22,
  },
  {
    employeeName: "Shyam",
    employeeId: 20,
  },
];

const set = new Set();
const result = {};

function countOccurrences(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i].employeeName)) {
      result[arr[i].employeeName].occurrences++;
    } else {
      set.add(arr[i].employeeName);
      result[arr[i].employeeName] = { employeeName: arr[i].employeeName, occurrences: 1,
      };
    }
  }
  return Object.values(result);
}
console.log(countOccurrences(arr));
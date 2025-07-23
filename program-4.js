// Write a JavaScript program to get the index of an object by it's property.

// Input:  
// arrayObj = [{
//     prop_1: 'val_1',
//     prop_2: 'val_2',
//     prop_3: 'val_3'
// }, {
//     prop_1: 'val_4',
//     prop_2: 'val_5',
//     prop_3: 'val_6'
// }];

// Output: 1 (index of an object for prop_1: 'val_4')

arrayObj = [{
    prop_1: 'val_1',
    prop_2: 'val_2',
    prop_3: 'val_3'
}, {
    prop_1: 'val_4',
    prop_2: 'val_5',
    prop_3: 'val_6'
}];

const findIndex = function (arrayObj, key, target){
    for(let i=0; i<arrayObj.length; i++){
        if(arrayObj[i][key] === target){
            return i;
        }
    }
    return -1;
};

console.log(`${findIndex(arrayObj, 'prop_2', 'val_5')} (index of an object for prop_1: 'val_4')`);
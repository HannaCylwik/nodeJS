// ZADANIE 1

// let uniq = function (array){
//     let secondArray = [];
//     for (let i = 0; i < array.length; i++){
//         if (secondArray.indexOf(array[i]) == -1){
//             secondArray.push(array[i]);
//         }
//     }
//     return secondArray;
// }

// module.exports.uniq = uniq;



// ZADANIE 2

// let diff = function(tab1, tab2){
//     for (let i = 0; i < tab1.length; i++){
//         if (tab1[i] != tab2[i]){
//             return tab1[i]
//         }
// }
// }

// module.exports.diff = diff;



// ZADANIE 3

// nie potrzeba się odwoływać do niego, bo odnosisz się do ladash i metody w nim




// ZADANIE 6, 7

let add = function(a, b, callback){
    let result = a + b;
    callback(result);
}
let sub = function(a, b, callback){
    let result =  a - b;
    callback(result);
}
let multi = function(a, b, callback){
    let result = a * b;
    callback(result);
}
let div = function(a, b, callback){
    let result = a / b;
    callback(result);
}



exports.add = add;
exports.sub = sub;
exports.multi = multi;
exports.div = div;
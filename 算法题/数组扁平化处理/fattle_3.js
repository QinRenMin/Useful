//利用扩展运算符
let arr = [1,2,[3,4,5],[6,[7,8,[9]]]];

let result = fattle(arr);

function fattle(arr){
    while (arr.some(v => Array.isArray(v))) {
        arr = [].concat(...arr);
    }
    return arr;
}
console.log(fattle(arr));
//使用正则
let arr = [1,2,[3,4,5],[6,[7,8,[9]]]];

let result = fattle(arr);
function fattle(arr) {
    let str = JSON.stringify(arr).replace(/\[|\]/g,"");
    let arry = str.split(",");

   return  str.split(",").map(item => item - 0);
}
console.log(fattle(arr));
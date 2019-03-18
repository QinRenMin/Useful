//先排序，后去重

let arr = [2,4,5,6,4,2,2,6,7,8];
let newArr = arr.sort();
console.log(newArr);
let result = [];

//如果从下标为0开始，注意最后一个元素
// for(let i = 0; i < newArr.length-1; i++) {
//     if(newArr[i] !== newArr[i+1]){
//         result.push(newArr[i]);
//     }
// }
// result.push(newArr[newArr.length-1]);

//从下标为1开始，直接选择符合地即可
for(let i = 1; i < newArr.length; i++) {
    if(newArr[i] !== newArr[i+1]){
        result.push(newArr[i]);
    }
}
console.log(result);
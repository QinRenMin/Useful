//使用　es6 Set不允许有重复

let arr = [2,4,5,6,2,4];
let item = new Set(arr);//去重
let result = [... item];　//转为数组
let result2 = Array.from(item); //转为数组
console.log(result);
console.log(result2);

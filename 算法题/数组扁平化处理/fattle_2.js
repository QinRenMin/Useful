//利用reduce实现
let arr = [1,2,[3,4,5],[6,[7,8,[9]]]];

let result = fattle(arr,[]);
function fattle(arr){
    return arr.reduce((pre,next) => pre.concat(Array.isArray(next) ? fattle(next):next),[])
}
console.log(fattle(arr));
let arr = [1,2,[3,4,5],[6,[7,8,[9]]]];

let result = fattle(arr,[]);
//使用for循环　递归实现
function fattle(arr) {
    let temp = [];
    for(let i = 0 ;i < arr.length; i++){
        if(Array.isArray(arr[i])) {
            temp = temp.concat(fattle(arr[i]))
        }else{
            temp.push(arr[i]);
        }
    }
    return temp;
}

console.log(result);
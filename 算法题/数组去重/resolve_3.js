//数组下标判断

let arr = [2,4,5,6,4,2,2,6,7,8];
// console.log(arr.indexOf(4));//1
function unique(arr){
    let result =[arr[0]];
    for(var i = 1; i < arr.length; i++){
        if(arr.indexOf(arr[i]) == i){
            result.push(arr[i])
        }
    }
        console.log(result);
}



unique(arr);
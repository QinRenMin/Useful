//利用hash key不允许有重复值

function unique(arr){
    let h = {};    //定义一个hash表
    let ar = [];  //定义一个临时数组

    for(let i = 0; i < arr.length; i++){    //循环遍历当前数组
        //对元素进行判断，看是否已经存在表中，如果存在则跳过，否则存入临时数组
        if(!h[arr[i]]){
            //存入hash表
            h[arr[i]] = true;
            // 把当前数组元素存入到临时数组中
            ar.push(arr[i]);
        }
    }
    console.log(h)
    return ar;
}
console.log(unique([1,2,3,4,5,2,3]))
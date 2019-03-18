Array.prototype.fakeReduce = function (fn, base) {

    let initialArr = this;
    console.log("this " + this); //[1,2,3,4,5]
    let arr = initialArr.concat();

    if (base) arr.unshift(base);
    let newValue;
    console.log("元 "+arr)
    while (arr.length > 1) {
        newValue = fn.call(null, arr[0], arr[1]);

        arr.splice(0, 2, newValue); // 直接用 splice 实现替换
        console.log(arr);
    }

    return newValue;
};
let arr = [1, 2, 3, 4, 5];
let sum = arr.fakeReduce((prev, cur) => {
    // console.log(prev, cur, index, arr);
    return prev * cur;
}, 100);
console.log(sum);

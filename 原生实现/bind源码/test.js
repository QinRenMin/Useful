function func(...arg) {
    console.log(arg);
    console.log(this);
}

func.prototype.sayHi = function () {
    console.log("hi");

};

Function.prototype.Bind = function (thisArg,...list) {

    let self = this; //目标函数

    // console.log(thisArg);
    // return function (...arg) {
    //     self.apply(thisArg,[...arg,...list])
    // }

    //在返回函数中修改this指向
    let Bind  = function (...arg) {
        self.apply(thisArg,[...arg,...list]);
    };

    //原型继承
    Bind.prototype = Object.create(self.prototype);
    // Bind.prototype.constructor = self;
    return Bind;
};

let newFunc = func.Bind({a:"aa"},[1,2,3,4]);
newFunc(1,1);
let f1 =new newFunc(2,2);
console.log(f1.sayHi);



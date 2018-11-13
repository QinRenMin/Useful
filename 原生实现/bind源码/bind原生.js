function func(...arg) {
    console.log(arg);
    console.log(this);
}

func.prototype.sayHi = function() {
    console.log("hello");
};

let newFunc = func.bind({a:"aaa"},1,2,3,4);
newFunc(1,1);
let f1 =new  newFunc(5,6,7,8);
console.log(f1.sayHi);
console.log("-------------");

Function.prototype.selfBind = function (thisArg,...list) {
    let self = this; //目标函数
    // console.log(thisArg); //{a:"aaa"}
    // console.log(self); //调用的函数func func(){}
    //返回新函数
    // return function (...arg2) {
    //     self.apply(thisArg,[list,arg2]);
    // }

    //返回的新函数找不到目标函数的方法,解决办法:让新函数继承目标函数的原型

    let Bind = function (...arg){
        self.apply(thisArg,[...list,...arg]);
    };

    //原型继承
    Bind.prototype = Object.create(self.prototype);
    Bind.prototype.constructor = self;

    return Bind;
};
let newFunc2 = func.selfBind({a:"aaa"},1,2,3,4);
newFunc2(2,2);
let f2 = new newFunc2(5,6,7,8);
console.log(f2.sayHi);
/*
*
* [ 1, 2, 3, 4, 1, 1 ]
{ a: 'aaa' }
[ 1, 2, 3, 4, 5, 6, 7, 8 ]
func {}
[Function]
-------------
[ 1, 2, 3, 4, 2, 2 ]
{ a: 'aaa' }
[ 1, 2, 3, 4, 5, 6, 7, 8 ]
{ a: 'aaa' }
[Function]
* */
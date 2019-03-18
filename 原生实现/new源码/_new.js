function _new(fun) {

    return function(){
        let obj = {
            __proto__: fun.prototype
        }
        fun.apply(obj,arguments);
        console.log(arguments); //{'0':'bb','1'"100}
        console.log(obj. __proto__);//person{}
        return obj;
    }

}
function person(name,age,a){

    this.name = name;
    this.age = age;
    this.a = "22";
}
let obj = _new(person)("bb",100);
console.log(obj);//person { name: 'bb', age: 100 }
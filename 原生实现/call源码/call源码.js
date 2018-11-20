function add(c,d) {
    console.log(this.a+this.b+c+d) ;
}
Function.prototype.es6Call = function (context) {
    context = context||window;
    // console.log(context);//{ a: 1, b: 2 }
    context.fn = this;
    // console.log(this);//[Function: add]
     let args = [];
     // console.log(arguments);//{ '0': { a: 1, b: 2, fn: [Function: add] }, '1': 3, '2': 4 }
     for(let i = 1,len=arguments.length;i<=len;i++){
         args.push(arguments[i]);
     }
      context.fn(...args);
      delete context.fn;
};
add.es6Call({a:1,b:2},3,4);
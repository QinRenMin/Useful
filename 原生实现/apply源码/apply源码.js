function add(c,d) {
    console.log(this.a+this.b+c+d);
}

Function.prototype.es6Apply = function(context,arr){
    // console.log(context);//{ a: 1, b: 2 }
    context = context||window;
    context.fn = this;
    // console.log(arguments[1]);
    if(arr.length===0){
         context.fn();
    }else {
        if(!(arr instanceof Array)){
            throw new Error('params must be array');
        }
        context.fn(...arr);
    }
    delete context.fn;
};

add.es6Apply({a:1,b:2},[3,4]);
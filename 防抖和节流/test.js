let t = function (func,delay) {
       let timer = null;
        let context = this;
        // console.log(this)
        let args = arguments;
        if(!timer) {
            timer = setTimeout(function () {
                func.apply(context,args);
                timer = null;
            },delay)
        }

};
function handle() {
    console.log('aaa');
}
t(handle,1000);
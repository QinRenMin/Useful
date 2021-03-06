let throttle = function (fn, delay, mustRunDelay) {
    let timer = null;
    let t_start;
    return function () {
        let context = this,
            args = arguments,
            t_curr = +new Date();
        clearTimeout(timer);
        if (!t_start) {
            t_start = t_curr;
        }
        if (t_curr - t_start >= mustRunDelay) {
            fn.apply(context, args);
            t_start = t_curr;
        } else {
            timer = setTimeout(function () {
                fn.apply(context, args);
            }, delay);
        }
    };
};
// function myFunc(){
//     console.log("a");
// }
// 调用（两次间隔50ms内连续触发不执行，但每累计100ms至少执行一次
window.onresize = throttle(myFunc, 50, 100);

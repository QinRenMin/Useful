let isAllow = true;
let interTimer = setInterval(() => {
    shake();
}, 0);
function shake() {
    let fun = function() {
        if (!isAllow) return;
        isAllow = false;
        let timer = setTimeout(() => {
            console.log("这里是实际的业务代码");
            clearTimeout(timer);
            timer = null;
            isAllow = true;
        }, 1000);
    };
    fun();
}


let setTimer;
let shake = function() {
    clearTimeout(setTimer);
    setTimer = setTimeout(() => {
        console.log("这里是实际的业务代码");
    }, 0);
};

let interTimer = setInterval(() => {
    shake();
}, 0);

let timer = setTimeout(() => {
    clearInterval(interTimer);
    clearTimeout(timer);
    timer = null;
    interTimer = null;
}, 100);

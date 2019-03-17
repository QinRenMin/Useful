let timeout = null;
function d(fn,wait) {

    if(timeout !== null) {
        clearTimeout(timeout);
    }
        timeout = setTimeout(fn,wait);

}
function handle() {
    console.log('ddd');
}
d(handle,1000);
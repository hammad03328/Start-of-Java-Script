let x = 0;
function Addition() {
    for (let i = 0; i < arguments.length; i++) {
        x = x + arguments[i];
    }
    return x;
}
let a = (Addition(1, 2, 3, 4, 5, 6, 7))
console.log(a);
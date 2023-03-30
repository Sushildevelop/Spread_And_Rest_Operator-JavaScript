function swapValues(x, y) {
    let arr = [x, y];
    [x, y] = [y, x];
    return [x, y];

}
let x = 5;
let y = 6;
[x, y] = swapValues(x, y)
console.log([x, y]);
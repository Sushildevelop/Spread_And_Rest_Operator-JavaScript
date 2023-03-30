function MaxandMin(arr) {
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return { max, min };
}
const arr = [5, 2, 77, 3, 2, 1, 0]
const result = MaxandMin(arr)
console.log(result);
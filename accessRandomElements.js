function AccessRandom(arr) {
    // const [first, second, ...rest] = arr;
    const [first, second] = arr;
    const last = arr.pop();
    return [first, second, last]
}

const arr = [1, 2, 3, 4, 5, 6]
const extracted = AccessRandom(arr)
console.log(extracted);
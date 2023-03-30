function removeDuplicate(arr) {
    return new Set(arr)
}
let arr = [1, 2, 3, 2, 4, 5, 4]
console.log(removeDuplicate(arr));
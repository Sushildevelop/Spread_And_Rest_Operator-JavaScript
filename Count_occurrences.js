function countWord(str) {
    let arr = [...str];

    const wordCounts = new Map();

    arr.map((item) => wordCounts.set(item, (wordCounts.get(item) || 0) + 1));
    return wordCounts;
}
console.log(countWord("shushil chaubey"));
function NestedObjects(person) {
    const { name, address: { city } } = person;
    return { name, city }
}
const person = {
    name: "shushil",
    age: 22,
    address: {
        street: "JNV daman 39621",
        city: "Nani Daman",
        state: "Uttar",
    },
};
const { name, city } = NestedObjects(person)
console.log(name);
console.log(city);
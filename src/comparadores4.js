let obj1 = {
    n: 5
};
let obj2 = {
    n: 4
};
console.log("obj1 > obj2", obj1 > obj2);

let obj3 = {
    n: 5,
    valueOf: () => 5
};
let obj4 = {
    n: 4,
    valueOf: () => 4
};
console.log("obj3 > obj4", obj3 > obj4);
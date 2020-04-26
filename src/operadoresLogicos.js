console.log(
    `true && true = ${true && true}, true && false = ${true && false}, ` +
    `false && true = ${false && true}, false && false = ${false && false}`,
);
console.log(
    `true || true = ${true || true}, true || false = ${true || false}, ` +
    `false || true = ${false || true}, false || false = ${false || false}`,
);

let indef = undefined;
let obj = {
    campo: 'valor'
};

console.log('indef || {campo: "por defecto"} = ',
    indef || {campo: "por defecto"});
console.log('obj || {campo: "por defecto"} = ',
    obj || {campo: "por defecto"});
console.log('indef && indef.campo = ', indef && indef.campo);
console.log('obj && obj.campo = ', obj && obj.campo);
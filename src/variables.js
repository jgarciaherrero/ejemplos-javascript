var variableConVar = 'Declarada con var   fuera del bloque';
let variableConLet = 'Declarada con let   fuera del bloque';
const constante = 'Declarada con const fuera del bloque';

console.log('Antes del ámbito:');
console.log('  variableConVar:', variableConVar);
console.log('  variableConLet:', variableConLet);
console.log('  constante     :', constante);

{
    var variableConVar = 'Declarada con var   dentro del bloque';
    let variableConLet = 'Declarada con let   dentro del bloque';
    const constante = 'Declarada con const dentro del bloque';

    console.log('En el ámbito');
    console.log('  variableConVar:', variableConVar);
    console.log('  variableConLet:', variableConLet);
    console.log('  constante     :', constante);
}

console.log('Después del ámbito');
console.log('  variableConVar:', variableConVar);
console.log('  variableConLet:', variableConLet);
console.log('  constante     :', constante);

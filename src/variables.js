var variableConVar = 1;
let variableConLet = 1;
const constante = 1;

console.log('                    V L C');
console.log('  Antes del ámbito:', variableConVar, variableConLet, constante);

{
    var variableConVar = 2;
    let variableConLet = 2;
    const constante = 2;

    console.log('      En el ámbito:', variableConVar, variableConLet, constante);
}

console.log('Despues del ámbito:', variableConVar, variableConLet, constante);

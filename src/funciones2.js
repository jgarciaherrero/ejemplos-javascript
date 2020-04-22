function diHolaYAvisame(nombre, callbackAviso) {
    console.info("Hola " + nombre);
    callbackAviso(nombre);
}

function diAdios(nombre) {
    console.info("Adios " + nombre);
}

diHolaYAvisame('Estudiante', diAdios);
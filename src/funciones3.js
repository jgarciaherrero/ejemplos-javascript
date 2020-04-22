function diHolaYAvisame(nombre, callbackAviso) {
    console.info("Hola " + nombre);
    callbackAviso(nombre);
}

diHolaYAvisame('Estudiante', nombre => console.info("Adios " + nombre));
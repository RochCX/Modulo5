

const consul = new Consultorio(data.consultorio);
console.log(consul);

data.pacientes.forEach(element => {
    const persona = new Pacientes(element.nombre, element.apellido,element.edad , element.rut, element.diagnostico);
    consul.agregarPaciente(persona);
});

console.log(data);
console.log(consul);

// prueba de buscar pacientes
console.log(consul.buscarPaciente("Juan"));
console.log(consul.buscarPaciente("Elba"));
console.log(consul.buscarPaciente("Esteban"));



const consul = new Consultorio(data.consultorio);


data.pacientes.forEach(element => {
    const persona = new Pacientes(element.nombre, element.apellido,element.edad , element.rut, element.diagnostico);
    consul.agregarPaciente(persona);
});

console.log(consul);

function listaPacientes(){
    consul.pacientes.forEach(paciente => {
        console.log(paciente.nombre + " " + paciente.apellido + " id:" + paciente.id);
    });
}
listaPacientes();

// prueba de buscar pacientes
console.log(consul.buscarPaciente("Juan"));
console.log(consul.buscarPaciente("Esteban"));
console.log(consul.getPacientes());

const nuevoP = new Pacientes("Soperutano", "Soporifero", 12, "18385784-K", "Zapatos rotos");
consul.agregarPaciente(nuevoP);

consul.modPacientes(0,"se cayo de la escalera")
console.log(consul);

listaPacientes();
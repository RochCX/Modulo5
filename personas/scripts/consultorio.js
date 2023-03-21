function Consultorio(nombre) {
    this.consultorio = nombre;
    this.pacientes = [];
}

Consultorio.prototype.agregarPaciente = function (obj) {
    this.pacientes.push(obj);
}

Consultorio.prototype.buscarPaciente = function (valor) {
    return data.pacientes.filter(element => element.nombre === valor);
}